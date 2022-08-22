export function parseSymbolName(symbolName) {
	const parts = (symbolName || '').split(':')
	return {
		name: symbolName,
		symbol: parts.length > 1 ? parts[1] : symbolName,
		exchange: parts.length > 1 ? parts[0].toLowerCase() : '',
	}
}

export function generateUUID() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16),
	)
}

export function decimalPlaces(num) {
	if (num % 1 === 0) return num

	var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
	if (!match) { return 0 }

	return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0))
}

export function waitForElm(selector) {
	return new Promise(resolve => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector))
		}

		const observer = new MutationObserver(() => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector))
				observer.disconnect()
			}
		})

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		})
	})
}

export function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
