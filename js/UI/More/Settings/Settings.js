import App from "../../../App";
import { addOnOffTile, addOptionsTile } from "./tiles";
import * as EVENTS from "./events"


export default class Settings {
	constructor() {
		this.app = new App()
		this.config = this.app.config
	}

	init() {
		this.checkLocalStorage()
		this.initSettings()
	}

	initSettings() {
		let darkMode = addOptionsTile(this.config,
			"dark_mode", "Dark mode",
			"Make the colors more appropriate for low-light environments",
			"dark_mode", EVENTS.onThemeChange
		)

		addOnOffTile(this.config,
			"open_in_new", "Open in new tab",
			"Clicking on application will open it in a new browser tab",
			"open_new_tab", EVENTS.onNewTabChange
		)

		addOnOffTile(this.config,
			"sensors", "Ping dots",
			"Shows small dots before titles indicating whether service is up or not",
			"ping_dots", EVENTS.onPingDotsChange
		)

		addOnOffTile(this.config,
			"blur_on", "Enable blur",
			"Improves UI sweetness but may have a huge impact on performance",
			"blur", EVENTS.onBlurChange
		)

		addOnOffTile(this.config,
			"animation", "Animations",
			"Show nice and fancy page transitions for improved experience",
			"animations", EVENTS.onAnimationChange
		)

		document.querySelector("#theme-switcher").addEventListener("click", () => {
			let targetButtons = darkMode.querySelector(".options").children
			let storedValue = this.config.get("dark_mode")
			let target;
			if (storedValue == "Auto") {
				let isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
				target = 2 - isSystemDark
			}
			else {
				let isEnforcedDark = storedValue == "On"
				target = !isEnforcedDark + 1
			}
			targetButtons[target].click()
		})
	}

	checkLocalStorage() {
		let warn = document.querySelector("#no-cookies").classList
		if (this.config.storageAvailable) warn.add("hidden")
	}
}