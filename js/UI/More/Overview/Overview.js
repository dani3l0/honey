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
			let analysis = analyzeService(service.href)
			stats.total++
			stats.secure += analysis.isSecure
			stats.thirdParties += analysis.isThirdParty
		}
		this.div.querySelector(".big").innerText = stats.total

		let encryption_t
		let donot = ""
		if (stats.secure == stats.total) encryption_t = "All"
		else if (stats.secure == 0) encryption_t = "None of"
		else {
			encryption_t = stats.total - stats.secure
			donot = "do not"
		}
		encryption_t = `${encryption_t} service${s(encryption_t)} ${donot} use secure connections (HTTPS).`

		let indepencence_t
		if (stats.thirdParties == 0) indepencence_t =
			"This server is free of 3rd party services."
		else if (stats.thirdParties == stats.total) indepencence_t =
			"It seems only 3rd-party services are listed."
		else indepencence_t = 
			`${stats.thirdParties} service${s(stats.thirdParties)} ${isare(stats.thirdParties)} provided by 3rd-parties.`

		privacyBox("lock", "#0D6", "Encryption", encryption_t, stats.secure / stats.total)
		privacyBox("home", "#68F", "Independence", indepencence_t, 1 - stats.thirdParties / stats.total)
	}
}
