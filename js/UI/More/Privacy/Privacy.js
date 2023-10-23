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

		let secure_pp = 100 * stats.secure / stats.total
		let indepencence_pp = 100 * (stats.total - stats.thirdParties) / stats.total
		let https_importance = this.config.get("https_importance")
		let privacy_score = secure_pp * https_importance + indepencence_pp * (1 - https_importance)

		let privacy_report;
		if (privacy_score == 100) {
			privacy_report = "Data is sent securely and no third-party services are involved."
		}
		else if (privacy_score >= 85) {
			privacy_report = "Great privacy overall, but at some point it could be better."
		}
		else if (privacy_score >= 40) {
			privacy_report = "Decent privacy. You should pay attention what you're doing."
		}
		else privacy_report = "Transferring data is insecure and vulnerable to various threats."

		document.getElementById("report-score").innerText = Math.round(privacy_score)
		document.getElementById("report").innerText = privacy_report

		const phrase = " of the listed services are using secure connections"
		privacyBox(secure_pp, "icon-https", [
			{
				"from": 0,
				"name": "No encryption",
				"desc": "None" + phrase
			},
			{
				"from": 0.1,
				"name": "Poor encryption",
				"desc": "Only some" + phrase
			},
			{
				"from": 60,
				"name": "Fair encryption",
				"desc": "Most" + phrase
			},
			{
				"from": 90,
				"name": "Good encryption",
				"desc": "Nearly all" + phrase
			},
			{
				"from": 100,
				"name": "Full encryption",
				"desc": "All" + phrase
			}
		])

		privacyBox(indepencence_pp, "icon-rocket", [
			{
				"from": 0,
				"name": "Not independent",
				"desc": "This server lists a lot of 3rd party services"
			},
			{
				"from": 40,
				"name": "Partially independent",
				"desc": "This server lists many 3rd party services"
			},
			{
				"from": 65,
				"name": "Mostly independent",
				"desc": "This server still lists some 3rd party services"
			},
			{
				"from": 100,
				"name": "Fully independent",
				"desc": "This server is free of 3rd party services"
			}
		])
	}

}