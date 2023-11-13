/*global ccxt, binanceapi*/
import { parseSymbolName, decimalPlaces, generateUUID, sleep } from './helpers.js'

const exchangeCache = new Map()
const lastBarsCache = new Map()
const lastQuotesCache = new Map()

const subscribeBarsCache = new Map()
const subscribeQuotesCache = new Map()
const subscribeDepthCache = new Map()

const exchangeSockets = {
	'spot': 'binance',
	'usdm': 'binanceusdm',
	'coinm': 'binancecoinm',
}
const socketsExchange = {
	'binance': 'spot',
	'binanceusdm': 'usdm',
	'binancecoinm': 'coinm',
}
const timeframeMapping = {
	'1s': '1S',
	'3s': '3S',
	'5s': '5S',
	'10s': '10S',
	'15s': '15S',
	'30s': '30S',
	'45s': '45S',
	'1m': '1',
	'3m': '3',
	'5m': '5',
	'10m': '10',
	'15m': '15',
	'30m': '30',
	'45m': '45',
	'1h': '60',
	'2h': '120',
	'3h': '180',
	'4h': '240',
	'6h': '360',
	'8h': '480',
	'12h': '720',
	'1d': '1D',
	'3d': '3D',
	'5d': '5D',
	'7d': '7D',
	'1w': '1W',
	'2w': '2W',
	'1M': '1M',
	'3M': '3M',
	'4M': '4M',
	'6M': '6M',
	'1y': '12M',
	//	'spot': '',
	//	'swap': '',
}
const intervalMapping = {
	'1m': 1 * 60,
	'3m': 3 * 60,
	'5m': 5 * 60,
	'15m': 15 * 60,
	'30m': 30 * 60,
	'1h': 60 * 60,
	'2h': 120 * 60,
	'4h': 240 * 60,
	'6h': 360 * 60,
	'8h': 480 * 60,
	'12h': 720 * 60,
	'1d': 1440 * 60,
	'3d': 4320 * 60,
	'1w': 10080 * 60,
	'1M': 45360 * 60,
}

const supportedResolutions = {}
const configurationData = {
	exchanges: [],
	symbols_types: [{
		value: 'crypto',
		name: 'Cryptocurrency',
	}],
	supported_resolutions: [],
	supports_time: true,
	supports_search: true,
	supports_marks: false,
	supports_timescale_marks: false,
	supports_group_request: false,
}

Object.keys(ccxt.exchanges).forEach(exchangeId => {
	const exchange = getExchange(exchangeId)

	configurationData.exchanges.push({
		value: exchange.id.toUpperCase(),
		name: exchange.name,
		desc: exchange.name + (exchange.version ? ` (${exchange.version})` : ''),
	})

	if (exchange.timeframes)
		Object.keys(exchange.timeframes).forEach(timeframe => {
			const resolution = timeframeMapping[timeframe]

			exchange.resolutions[resolution] = timeframe

			if (resolution && !supportedResolutions[resolution]) {
				supportedResolutions[resolution] = timeframe
				configurationData.supported_resolutions.push(resolution)
			}
		})
})

const wsClient = new binanceapi.WebsocketClient({
	beautify: true,
	disableHeartbeat: true,
}, {
	silly: () => { },
	debug: (...params) => {
		console.log(params)
	},
	notice: (...params) => {
		console.log(params)
	},
	info: () => { },
	warning: (...params) => {
		console.log(params)
	},
	error: (...params) => {
		console.log(params)
	},
})

wsClient.on('formattedMessage', data => {
	const exchange = getExchangeBySocket(data.wsMarket)

	if (binanceapi.isWsFormattedKline(data)) {
		const kline = data.kline
		const channel = `${exchange.id}:${kline.symbol}:${kline.interval}`

		if (subscribeBarsCache.has(channel)) {
			const subscriptionItem = subscribeBarsCache.get(channel)
			const lastBar = subscriptionItem.lastBar
			const intervalTime = getIntervalTime(kline.interval)
			const nextBarTime = lastBar.time + (intervalTime * 1000)
			let bar = {}

			if (kline.startTime >= nextBarTime) {
				bar = {
					time: nextBarTime,
					open: kline.open,
					high: kline.high,
					low: kline.low,
					close: kline.close,
					volume: kline.volume,
				}
			} else {
				bar = {
					...lastBar,
					high: Math.max(lastBar.high, kline.high),
					low: Math.min(lastBar.low, kline.low),
					close: kline.close,
					volume: kline.volume,
				}
			}

			subscriptionItem.lastBar = bar
			subscriptionItem.handlers.forEach(handler => handler.onRealtimeCallback(bar))
		}

		return
	}

	if (data.symbol) {
		const channel = `${exchange.id}:${data.symbol}`

		{
			const subscriptionItem = subscribeQuotesCache.get(channel)
			if (subscriptionItem) {
				const quote = lastQuotesCache.get(channel) || { s: 'ok', n: subscriptionItem.parsed.name.toLocaleUpperCase(), v: {} }

				if (binanceapi.isWsFormatted24hrTicker(data)) {
					quote.v = {
						...quote.v,
						ch: data.priceChange,
						chp: data.priceChangePercent,
						lp: data.currentClose,
						open_price: data.open,
						high_price: data.high,
						low_price: data.low,
						prev_close_price: data.prevClosePrice,
						volume: data.volume,
					}

					subscriptionItem.handlers.forEach(handler => handler.onRealtimeCallback([quote]))
					return
				}

				if (data.eventType === 'bookTicker') {
					quote.v = {
						...quote.v,
						ask: data.askPrice,
						bid: data.bidPrice,
					}

					subscriptionItem.handlers.forEach(handler => handler.onRealtimeCallback([quote]))
					return
				}
			}
		}

		if (data.eventType === 'depthUpdate') {
			subscribeDepthCache.forEach((subscriptionItem) => {
				if (subscriptionItem.channel !== channel) return

				const depth = {
					snapshot: false,
					asks: data.askDepthDelta.map(e => {
						return {
							price: e.price,
							volume: e.quantity,
						}
					}),
					bids: data.bidDepthDelta.map(e => {
						return {
							price: e.price,
							volume: e.quantity,
						}
					}),
				}

				subscriptionItem.callback(depth)
			})
			return
		}
	}
})

function getExchange(exchangeId) {
	exchangeId = exchangeId.toLowerCase()

	if (!ccxt[exchangeId]) return null

	if (!exchangeCache.has(exchangeId)) {
		const exchange = new ccxt[exchangeId]

		exchange.proxy = window.options.cors_url

		exchange.type = 'crypto'
		exchange.resolutions = {}

		exchangeCache.set(exchangeId, exchange)
	}

	return exchangeCache.get(exchangeId)
}

function getExchangeBySocket(socket) {
	return exchangeCache.get(exchangeSockets[socket])
}

function getIntervalTime(interval) {
	return intervalMapping[interval]
}

async function getKlines(exchange, symbol, timeframe, startTime, endTime, limit) {
	if (!exchange.has.fetchOHLCV) return null

	const params = {}
	if (exchange.id.startsWith('binance'))
		params.endTime = endTime

	return await exchange.fetchOHLCV(symbol, timeframe, startTime, limit, params)
}

export default {
	onReady: callback => {
		setTimeout(() => callback(configurationData))
	},

	searchSymbols: async (userInput, exchangeId, symbolType, onResultReadyCallback) => {
		const exchange = getExchange(exchangeId)
		if (!exchange) return

		await exchange.loadMarkets()

		onResultReadyCallback(
			Object.keys(exchange.markets_by_id).filter(symbol => {
				return symbol.indexOf(userInput) >= 0
			}).map(symbol => {
				const market = exchange.markets_by_id[symbol]

				return {
					symbol: market[0].id,
					full_name: market[0].id,
					description: `${market[0].base} / ${market[0].quote}`,
					ticker: exchange.id ? `${exchange.id.toUpperCase()}:${market[0].id}` : market[0].id,
					exchange: exchange.id.toUpperCase() || '',
					type: exchange.type || 'crypto',
				}
			}),
		)
	},

	resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
		const parsed = parseSymbolName(symbolName)
		const exchange = getExchange(parsed.exchange)
		if (!exchange) {
			onResolveErrorCallback('unsupported exchange')
			return
		}

		await exchange.loadMarkets()

		const market = exchange.markets_by_id[parsed.symbol]
		if (!market) {
			onResolveErrorCallback('cannot resolve symbol')
			return
		}

		onSymbolResolvedCallback({
			name: market[0].id,
			ticker: `${exchange.id.toUpperCase()}:${parsed.symbol}`,
			description: market[0].base + ' / ' + market[0].quote,
			type: exchange.type,
			session: '24x7',
			exchange: exchange.id.toUpperCase(),
			listed_exchange: exchange.name,
			timezone: 'UTC',
			minmov: 1,
			pricescale: Math.pow(10, decimalPlaces(market[0].precision?.price || 1)),
			supported_resolutions: Object.keys(exchange.resolutions),
			has_intraday: true,
			has_daily: true,
			has_weekly_and_monthly: true,
			currency_code: market[0].quote,
			data_status: 'streaming',
		})
	},

	getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
		let { from, to, countBack, firstDataRequest } = periodParams
		const exchange = getExchange(symbolInfo.exchange)

		const timeframe = supportedResolutions[resolution]
		if (!timeframe) {
			onErrorCallback('unsupported resolution')
			return
		}

		let klines = []
		const finishKlines = () => {
			const bars = klines.map(e => {
				return {
					time: e[0],
					close: parseFloat(e[4]),
					open: parseFloat(e[1]),
					high: parseFloat(e[2]),
					low: parseFloat(e[3]),
					volume: parseFloat(e[5]),
				}
			})

			if (firstDataRequest)
				lastBarsCache.set(`${exchange.id}:${symbolInfo.name}:${timeframe}`, {
					...bars[bars.length - 1],
				})

			if (bars.length == 0)
				onHistoryCallback(bars, { noData: true })
			else
				onHistoryCallback(bars, { noData: false })
		}

		let limit = Math.min(200, countBack)
		const loadKlines = async (from, to) => {
			await getKlines(exchange, symbolInfo.name, timeframe, from, to, limit).then(async data => {
				countBack -= limit

				klines = klines.concat(data)
				if (data.length == limit && countBack > 0) {
					limit = Math.min(200, countBack)
					from = data[data.length - 1][0] + 1
					await sleep(exchange.rateLimit)
					await loadKlines(from, to)
				} else {
					finishKlines()
				}
			}).catch(err => {
				onErrorCallback(err)
			})
		}

		await loadKlines(from * 1000, to * 1000)
	},

	subscribeBars: async (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) => {
		const exchange = getExchange(symbolInfo.exchange)
		if (!socketsExchange[exchange.id]) return

		const timeframe = supportedResolutions[resolution]
		if (!timeframe) return

		const channel = `${exchange.id}:${symbolInfo.name}:${timeframe}`
		const handler = {
			subscriberUID,
			onRealtimeCallback,
			onResetCacheNeededCallback,
		}

		if (subscribeBarsCache.has(channel)) {
			subscribeBarsCache.get(channel)
				.handlers.push(handler)
			return
		}

		subscribeBarsCache.set(channel, {
			symbolInfo,
			resolution,
			lastBar: lastBarsCache.get(channel),
			socket: wsClient.subscribeKlines(symbolInfo.name, timeframe, socketsExchange[exchange.id]),
			handlers: [handler],
		})
	},

	unsubscribeBars: async (subscriberUID) => {
		subscribeBarsCache.forEach((subscriptionItem, channel) => {
			let handlerIndex = 0

			do {
				handlerIndex = subscriptionItem.handlers
					.findIndex(handler => handler.subscriberUID === subscriberUID)
				if (handlerIndex >= 0)
					subscriptionItem.handlers.splice(handlerIndex, 1)
			} while (handlerIndex >= 0)

			if (subscriptionItem.handlers.length <= 0) {
				wsClient.closeWs(subscriptionItem.socket, false)
				subscribeBarsCache.delete(channel)
				lastBarsCache.delete(channel)
			}
		})
	},

	getServerTime: (callback) => {
		callback(Math.floor(Date.now() / 1000))
	},

	getQuotes: async (symbols, onDataCallback) => {
		for (let item of symbols) {
			const parsed = parseSymbolName(item)
			const exchange = getExchange(parsed.exchange)
			if (!exchange) continue

			await exchange.loadMarkets()

			const market = exchange.markets_by_id[parsed.symbol]
			if (!market) continue

			const ticker = await exchange.fetchTicker(parsed.symbol)

			if (!ticker.bid || !ticker.ask) {
				if (exchange.has.fetchBidsAsks) {
					const book = await exchange.fetchBidsAsks([parsed.symbol])
					ticker.bid = book[ticker.symbol].bid
					ticker.ask = book[ticker.symbol].ask
				}
			}

			lastQuotesCache.set(item, {
				s: 'ok',
				n: item,
				v: {
					ch: ticker.change,
					chp: ticker.percentage,
					short_name: parsed.symbol,
					exchange: exchange.id.toUpperCase(),
					original_name: item,
					description: `${market.base} / ${market.quote}`,
					lp: ticker.last,
					ask: ticker.ask,
					bid: ticker.bid,
					open_price: ticker.open,
					high_price: ticker.high,
					low_price: ticker.low,
					prev_close_price: ticker.previousClose,
					volume: ticker.baseVolume,
				},
			})
		}

		onDataCallback(Array.from(lastQuotesCache.values()))
	},

	subscribeQuotes: (symbols, fastSymbols, onRealtimeCallback, listenerGUID) => {
		for (let item of fastSymbols) {
			const parsed = parseSymbolName(item)
			const exchange = getExchange(parsed.exchange)
			if (!exchange || !socketsExchange[exchange.id]) continue

			const channel = `${exchange.id}:${parsed.symbol}`
			const handler = {
				listenerGUID,
				onRealtimeCallback,
			}

			if (subscribeQuotesCache.has(channel)) {
				subscribeQuotesCache.get(channel)
					.handlers.push(handler)
				continue
			}

			subscribeQuotesCache.set(channel, {
				symbols,
				fastSymbols,
				parsed,
				sockets: {
					ticker: wsClient.subscribeSymbol24hrTicker(parsed.symbol, socketsExchange[exchange.id]),
					book: wsClient.subscribeSymbolBookTicker(parsed.symbol, socketsExchange[exchange.id]),
				},
				handlers: [handler],
			})
		}
	},

	unsubscribeQuotes: (listenerGUID) => {
		subscribeQuotesCache.forEach((subscriptionItem, channel) => {
			let handlerIndex = 0

			do {
				handlerIndex = subscriptionItem.handlers
					.findIndex(handler => handler.listenerGUID === listenerGUID)
				if (handlerIndex >= 0)
					subscriptionItem.handlers.splice(handlerIndex, 1)
			} while (handlerIndex >= 0)

			if (subscriptionItem.handlers.length <= 0) {
				wsClient.closeWs(subscriptionItem.sockets.ticker, false)
				wsClient.closeWs(subscriptionItem.sockets.book, false)

				subscribeQuotesCache.delete(channel)
				lastQuotesCache.delete(channel)
			}
		})
	},

	subscribeDepth: async (symbolInfo, callback) => {
		const parsed = parseSymbolName(symbolInfo)
		const exchange = getExchange(parsed.exchange)
		if (!exchange || !socketsExchange[exchange.id]) return null

		const subscriberUID = generateUUID()
		subscribeDepthCache.set(subscriberUID, {
			channel: `${exchange.id}:${parsed.symbol}`,
			symbolInfo,
			callback,
			parsed,
			socket: wsClient.subscribeDiffBookDepth(parsed.symbol, 100, socketsExchange[exchange.id]),
		})
		return subscriberUID
	},

	unsubscribeDepth: async (subscriberUID) => {
		subscriberUID = await subscriberUID
		if (!subscribeDepthCache.has(subscriberUID)) return
		wsClient.closeWs(subscribeDepthCache.get(subscriberUID).socket, false)
		subscribeDepthCache.delete(subscriberUID)
	},
}
