export function analyzeService(url) {
	let isSiteSecure = (
		window.location.protocol == "https:" ||
		window.location.hostname == "localhost"
	)

	let domain_base = window.location.hostname
	let isSecure = false
	let isThirdParty = true

	if (url.startsWith("https://")) {
		isSecure = true
	}
	else if (!["http", "https"].includes(url.split("://")[0])) {
		isSecure = isSiteSecure
	}

	if (isThirdParty) {
		let domain = url.split("://")
		if (domain.length > 1) {
			domain = domain[1]
			domain = domain.split("/")[0]
			domain = domain.split(":")[0]
			isThirdParty = !domain.includes(domain_base)
		}
		else {
			isThirdParty = false
		}
	}

	return {isSecure, isThirdParty}
}