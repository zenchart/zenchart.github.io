/*global options TradingView*/
import { waitForElm } from './helpers.js'
import datafeed from './datafeed.js'

const defaults = {
	user: {
		_id: 0,
		email: 'public',
		profile: {
			name: 'Public',
		},
	},
}

function createWidget(config) {
	let waitMagicInput = false

	const alertLines = new Map()

	const customElements = {}
	const customShapes = {
		magicfibr: [],
	}

	const chartingWidget = new TradingView.widget({
		library_path: 'js/lib/chart/charting_library/',
		datafeed: datafeed,
		debug: false,

		container: 'chart',
		fullscreen: true,

		symbol: 'BINANCE:BTCUSDT',
		interval: '1',
		timezone: 'Etc/UTC',

		locale: 'en',
		theme: 'dark',

		load_last_chart: true,
		auto_save_delay: 5,

		disabled_features: ['dom_widget', 'trading_account_manager', 'chart_property_page_trading', 'order_panel'],
		enabled_features: ['study_templates', 'seconds_resolution'],

		loading_screen: { backgroundColor: '#000000' },

		charts_storage_url: options.storage_url,
		charts_storage_api_version: options.storage_api_version,
		client_id: options.client_id,
		user_id: config.user?._id || 0,

		widgetbar: {
			details: false,
			news: false,
			watchlist: true,
			datawindow: false,
		},
	})

	chartingWidget.onChartReady(() => {
		const activeChart = chartingWidget.activeChart()

		const removeAlert = (drawingId, event) => {
			if (!alertLines.has(drawingId)) return
			const alert = alertLines.get(drawingId)

			if (event === 'remove') {
				alertLines.delete(drawingId)
				activeChart.removeEntity(drawingId)

				fetch(`${options.alert_url}/${alert._id}`, {
					method: 'DELETE',
				}).then(res => {
					return res.json()
				}).then(json => {
					return json.data
				}).catch(err => {
					console.log('Delete Alert error: ', err)
				})
			}
		}

		const createAlertLine = (alert) => {
			alertLines.set(activeChart.createShape({ time: alert.time, price: alert.price }, {
				shape: 'horizontal_line',
				zOrder: 'bottom',
				text: 'Alert',
				lock: false,
				disableSelection: false,
				disableSave: true,
				disableUndo: true,
				showInObjectsTree: true,
				overrides: {
					showLabel: true,
					showPrice: true,
					bold: false,
					italic: false,
					font: 'Arial',
					fontsize: 10,
					textcolor: '#00bcd4',
					linecolor: '#2962ff',
					linestyle: 0,
					linewidth: 1,
					horzLabelsAlign: 'right',
					vertLabelsAlign: 'middle',
				},
			}), alert)
		}

		const fetchAlerts = () => {
			return fetch(options.alert_url)
				.then(res => {
					return res.json()
				})
				.then(json => {
					if (!json.data) return []
					json.data.sort((a, b) => b.price - a.price)
					return json.data
				})
				.catch(err => {
					console.log('Get Alerts account error: ', err)
				})
		}

		const drawAlerts = (alerts) => {
			alertLines.forEach((alert, shapeId) => {
				alertLines.delete(shapeId)
				activeChart.removeEntity(shapeId)
			})
			
			alerts.forEach(alert => {
				createAlertLine(alert)
			})
		}

		fetchAlerts().then(alerts => {
			drawAlerts(alerts)
			chartingWidget.subscribe('drawing_event', removeAlert)
		})

		chartingWidget.headerReady().then(() => {
			const username = config.user?.profile?.name || config.user.email
			const profileDropdown = {
				title: '',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><circle fill="#9F609C" width="24" height="24" cx="12" cy="12" r="12"/><text x="50%" y="50%" style="color: #ffffff;line-height: 1;font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;" alignment-baseline="middle" text-anchor="middle" font-size="17" font-weight="400" dy=".1em" dominant-baseline="middle" fill="#ffffff">${username.charAt(0).toUpperCase()}</text></svg>`,
				align: 'right',
			}

			if (!config.loggedIn) {
				customElements.profile = chartingWidget.createDropdown({
					...profileDropdown,
					items: [{
						title: 'Login',
						onSelect: () => {
							window.location.href = options.login_url
						},
					}],
				})
			} else {
				customElements.profile = chartingWidget.createDropdown({
					...profileDropdown,
					tooltip: `Logged in as ${username}`,
					items: [{
						title: 'Profile',
						onSelect: () => {
							window.location.href = options.profile_url
						},
					},
					{
						title: 'Logout',
						onSelect: () => {
							chartingWidget.showConfirmDialog({
								title: 'Logout',
								body: 'Are you sure you want to logout?',
								callback: result => {
									if (!result) return
									fetch(options.logout_url)
										.then(res => {
											return res.json()
										}).then(() => {
											document.location.reload(true)
										})
								},
							})
						},
					}],
				})

				customElements.alerts = chartingWidget.createButton()
				customElements.alerts.textContent = 'Alerts'
				customElements.alerts.setAttribute('title', 'Alerts')
				customElements.alerts.addEventListener('click', () => {
					fetchAlerts().then(alerts => {
						const lines = alerts.map(alert => {
							return `${alert.exchange}:${alert.symbol} Crossing ${alert.price} (${alert.current >= alert.price ? 'DOWN' : 'UP'})`
						})

						chartingWidget.showNoticeDialog({
							title: 'Alerts',
							body: lines.join('\r\n'),
						})

						drawAlerts(alerts)
					})
				})
			}

			customElements.magicfibr = chartingWidget.createButton()
			customElements.magicfibr.textContent = 'MF'
			customElements.magicfibr.setAttribute('title', 'Magic Fib Retracement')
			customElements.magicfibr.addEventListener('click', () => {
				if (waitMagicInput) return

				chartingWidget.selectLineTool('horizontal_ray')

				const created = (drawingId, event) => {
					waitMagicInput = false
					chartingWidget.unsubscribe('drawing_event', created)

					if (event != 'create') return

					const shape = activeChart.getShapeById(drawingId)
					if (shape._source.toolname != 'LineToolHorzRay') return
					activeChart.removeEntity(drawingId)

					const shapePoints = shape.getPoints()
					activeChart.exportData({
						from: shapePoints[0].time,
						includedStudies: [],
					}).then(result => {
						const points = []

						const highPoint = {
							time: result.data.reduce((a, b) => a[2] > b[2] ? a : b)[0],
							price: result.data.reduce((a, b) => a[2] > b[2] ? a : b)[2],
						}
						const lowPoint = {
							time: result.data.reduce((a, b) => a[3] < b[3] ? a : b)[0],
							price: result.data.reduce((a, b) => a[3] < b[3] ? a : b)[3],
						}

						if (highPoint.time < lowPoint.time) {
							points.push(highPoint)
							points.push(lowPoint)
						} else {
							points.push(lowPoint)
							points.push(highPoint)
						}

						customShapes.magicfibr.push({
							drawingId: activeChart.createMultipointShape(points, {
								shape: 'fib_retracement',
								zOrder: 'top',
							}),
						})
					})
				}

				waitMagicInput = true
				chartingWidget.subscribe('drawing_event', created)

				if (customShapes.magicfibr.length <= 0) {
					const deleted = (drawingId, event) => {
						if (event != 'remove') return

						const shapeId = customShapes.magicfibr.findIndex(e => e.drawingId === drawingId)
						if (shapeId === -1) return

						customShapes.magicfibr.splice(shapeId, 1)
						if (customShapes.magicfibr.length <= 0)
							chartingWidget.unsubscribe('drawing_event', deleted)
					}

					chartingWidget.subscribe('drawing_event', deleted)
				}
			})
		})

		chartingWidget.subscribe('onTick', bar => {
			customShapes.magicfibr.forEach(magicfibr => {
				const shape = activeChart.getShapeById(magicfibr.drawingId)
				const points = shape.getPoints()

				if (points[0].price > points[1].price) {
					points[1].price = bar.low < points[1].price ? bar.low : points[1].price
					points[1].time = bar.low < points[1].price ? bar.time : points[1].time
				} else {
					points[1].price = bar.high > points[1].price ? bar.high : points[1].price
					points[1].time = bar.high > points[1].price ? bar.time : points[1].time
				}

				shape.setPoints(points)
			})

			alertLines.forEach((alert, shapeId) => {
				let deleteAlert = false
				if (alert.current >= alert.price) {
					deleteAlert = bar.close <= alert.price
				} else {
					deleteAlert = bar.close >= alert.price
				}
				if (!deleteAlert) return

				alertLines.delete(shapeId)
				activeChart.removeEntity(shapeId)
			})
		})

		chartingWidget.subscribe('onPlusClick', level => {
			chartingWidget.showConfirmDialog({
				title: 'Create Alert',
				body: `Send alert when ${level.symbol} crosses ${activeChart.priceFormatter().format(level.price)}?`,
				callback: result => {
					if (!result) return

					activeChart.exportData({
						includedStudies: [],
					}).then(bars => {
						fetch(options.alert_url, {
							body: JSON.stringify({
								current: bars.data[bars.data.length - 1][4],
								price: activeChart.priceFormatter().format(level.price),
								symbol: level.symbol,
							}),
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
						}).then(res => {
							return res.json()
						}).then(json => {
							createAlertLine(json.data)
						}).catch(err => {
							console.log('Save Alert error: ', err)
						})
					})
				},
			})
		})
	})
}

document.addEventListener('DOMContentLoaded', () => {
	waitForElm('iframe').then((e) => {
		e.contentWindow.fetch = window.fetch
	})
	
	fetch(options.account_url)
		.then(res => {
			return res.json()
		}).then(json => {
			createWidget({
				user: json.status == 'success' ? json.data.user : defaults.user,
				loggedIn: json.status == 'success',
			})
		}).catch(err => {
			console.log('Get User account error: ', err)
		})
})
