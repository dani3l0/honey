import App from "../../../App";
import { analyzeService } from "./analyzer";
import { privacyBox } from "./tiles";


export default class Privacy {
	constructor() {
		this.app = new App()
		this.config = this.app.config
	}

	init() {
		this.initPrivacyPanel()
	}

	initPrivacyPanel() {
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

		let encryption = stats.secure / stats.total
		let encryption_t
		if (encryption == 1) encryption_t = "All"
		else if (encryption >= 0.9) encryption_t = "Most"
		else if (encryption > 0.5) encryption_t = "Many"
		else if (encryption > 0.2) encryption_t = "Some"
		else if (encryption > 0) encryption_t = "Few"
		else encryption_t = "No"
		encryption_t = `${encryption_t} listed services use secure connections.`

		let indepencence = (stats.total - stats.thirdParties) / stats.total
		let indepencence_t
		if (indepencence == 1) indepencence_t = "no"
		else if (indepencence > 0.7) indepencence_t = "some"
		else if (indepencence > 0.4) indepencence_t = "many"
		else if (indepencence > 0) indepencence_t = "a lot of"
		else indepencence_t = "only"
		indepencence_t = `There are ${indepencence_t} 3rd-party services here.`

		let score = (encryption + indepencence) / 2
		let score_t, score_d
		if (score == 1) {
			score_t = "Superb"
			score_d = "All data is sent securely and no 3rd-party services are involved."
		}
		else if (score >= 0.9) {
			score_t = "Great"
			score_d = "Awesome privacy practices, but still not perfect."
		}
		else if (score >= 0.6) {
			score_t = "Good"
			score_d = "Acceptable privacy practices, but still not perfect."
		}
		else if (score >= 0.3) {
			score_t = "Fair"
			score_d = "Definitely not a vault, but self-hosted at least."
		}
		else if (score > 0) {
			score_t = "Dangerous"
			score_d = "You should really pay attention what you're doing here."
		}
		else {
			score_t = ":0"
			score_d = "You're just testing, right?"
		}

		document.getElementById("report-score").innerText = score_t
		document.getElementById("report").innerText = score_d

		privacyBox("icon-https", "Encryption", encryption_t)
		privacyBox("icon-rocket", "Independence", indepencence_t)
	}
}
