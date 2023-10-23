import App from "../../App";
import * as EVENTS from "./events";
import { analyzeService } from "./security";
import * as tiles from "./tiles"


export default class Settings {
	constructor() {
		this.app = new App()
		this.config = this.app.config
		this.init()
	}

	init() {
		this.checkLocalStorage()
		this.initSecurityPanel()
		this.initSettings()
		this.initPager()
	}

	initSettings() {
		let darkMode = tiles.addOnOffTile(this.config,
			"dark_mode", "Dark mode",
			"Make the colors more appropriate for low-light environments",
			"dark_mode", EVENTS.onThemeChange
		)

		tiles.addOnOffTile(this.config,
			"open_in_new", "Open in new tab",
			"Clicking on application will open it in a new browser tab",
			"open_new_tab", EVENTS.onNewTabChange
		)

		tiles.addOnOffTile(this.config,
			"blur_on", "Enable blur",
			"Improves UI sweetness but may have a huge impact on performance",
			"blur", EVENTS.onBlurChange
		)

		tiles.addOnOffTile(this.config,
			"animation", "Animations",
			"Show nice and fancy page transitions for improved experience",
			"animations", EVENTS.onAnimationChange
		)

		document.getElementById("theme-switcher").addEventListener("click", () => {
			darkMode.click()
		})
	}

	initPager() {
		let switcher = document.getElementById("switch")
		let buttons = switcher.children
		let subsettings = document.getElementById("subsettings")

		for (let i = 0; i < buttons.length; i++) {
			let button = buttons[i]
			subsettings.children[i].setAttribute("style", `--n: ${i}`)

			button.addEventListener("click", () => {
				let calculatedHeight = subsettings.children[i].offsetHeight
				subsettings.style.height = `${calculatedHeight}px`
				subsettings.parentNode.setAttribute("style", `--id: ${i}`)
				switcher.setAttribute("style", `--switches: ${buttons.length}`)
			})
		}

		buttons[0].click()
	}

	initSecurityPanel() {
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
		let privacy_score = secure_pp * 0.5 + indepencence_pp * 0.5

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
		tiles.privacyBox(secure_pp, "icon-https", [
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

		tiles.privacyBox(indepencence_pp, "icon-rocket", [
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

	checkLocalStorage() {
		let warn = document.getElementById("no-cookies").classList
		if (this.config.storageAvailable) warn.add("hidden")
	}
}
