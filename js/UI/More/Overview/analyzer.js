export function analyzeService(url, whitelist) {
	let isSiteSecure = (
		window.location.protocol == "https:" ||
		window.location.hostname == "localhost"
	)

	let isSecure = false
	if (url.startsWith("https://")) {
		isSecure = true
	}
	else if (!["http", "https"].includes(url.split("://")[0])) {
		isSecure = isSiteSecure
	}

	let isThirdParty = true
	let domain_base = window.location.hostname
	let domain = url.split("://")
	if (domain.length > 1) {
		domain = domain[1]
		domain = domain.split("/")[0]
		isThirdParty = !domain.includes(domain_base)
		if (isThirdParty) {
			for (let entry of whitelist) {
				let re = RegExp(entry)
				if (re.exec(domain)) {
					isThirdParty = false
					break
				}
			}
		}
	}
	else {
		isThirdParty = false
	}

	return {isSecure, isThirdParty}
}