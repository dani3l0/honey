import App from "../../../App";
import { analyzeService } from "./analyzer";
import { privacyBox } from "./tiles";
import { s, isare } from "../../../Utils/StringUtils";


export default class Overview {
	constructor() {
		this.app = new App()
		this.config = this.app.config
		this.div = document.querySelector(".overview").parentNode
	}

	init() {
		this.initPrivacyBoxes()
	}

	initPrivacyBoxes() {
		let stats = {
			total: 0,
			secure: 0,
			thirdParties: 0
		}
		for (let service of this.config.getServices()) {
			let analysis = analyzeService(service.href, this.config.get("trusted_domains"))
			stats.total++
			stats.secure += analysis.isSecure
			stats.thirdParties += analysis.isThirdParty
		}
		this.div.querySelector(".big").setAttribute("style", `--value: ${stats.total}`)
		this.div.querySelector(".small").innerText = `Available service${s(stats.total)}`

		let encryption_t, encryption_d
		if (stats.secure == stats.total) {
			encryption_t = "Full encryption"
			encryption_d = "All services use secure connections (HTTPS)."
		}
		else if (stats.secure == 0) {
			encryption_t = "No encryption"
			encryption_d = "It seems server does not support HTTPS."

		}
		else {
			let insecure = stats.total - stats.secure
			encryption_t = "Partial encryption"
			encryption_d = `${insecure} service${s(insecure)} do not use secure connections.`

		}

		let indepencence_t, indepencence_d
		if (stats.thirdParties == 0) {
			indepencence_t = "Independence"
			indepencence_d = "This server is free of 3rd party services."
		}
		else if (stats.thirdParties == stats.total) {
			indepencence_t = "Something is wrong..."
			indepencence_d = "It seems only 3rd-party services are listed."
		}
		else {
			indepencence_t = "Partial independence"
			indepencence_d = `${stats.thirdParties} service${s(stats.thirdParties)} ${isare(stats.thirdParties)} provided by 3rd-parties.`
		}

		privacyBox("lock", "#0D6", encryption_t, encryption_d, stats.secure / stats.total)
		privacyBox("home", "#68F", indepencence_t, indepencence_d, 1 - stats.thirdParties / stats.total)
	}
}
