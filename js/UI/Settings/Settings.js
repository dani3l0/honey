import App from "../../App";
import * as EVENTS from "./events";

export default class Settings {
	constructor() {
		this.app = new App()
		this.config = this.app.config
		this.init()
	}

	init() {
		this.checkLocalStorage()

		let darkMode = this.addOnOffTile(
			"dark_mode", "Dark mode",
			"Make the colors more appropriate for low-light environments",
			"dark_mode", EVENTS.onThemeChange
		)
		document.getElementById("theme-switcher").addEventListener("click", () => {
			darkMode.click()
		})

		this.addOnOffTile(
			"open_in_new", "Open in new tab",
			"Clicking on application will open it in a new browser tab",
			"open_new_tab", EVENTS.onNewTabChange
		)

		this.addOnOffTile(
			"blur_on", "Enable blur",
			"Improves UI sweetness but may have a huge impact on performance",
			"blur", EVENTS.onBlurChange
		)

		this.addOnOffTile(
			"animation", "Animations",
			"Show nice and fancy page transitions for improved experience",
			"animations", EVENTS.onAnimationChange
		)
	}

	addOnOffTile(icon, name, desc, key, func) {
		let item = document.createElement("div")
		item.classList.add("setting")
		item.innerHTML = `
			<i>${icon}</i>
			<div class="text">
				<div class="name">${name}</div>
				<div class="desc">${desc}</div>
			</div>
			<div class="switch"></div>`

		let handleState = () => {
			let c = item.classList
			if (this.config.get(key)) c.add("checked")
			else c.remove("checked")
		}
		let write = () => {
			let target_value = !this.config.get(key)
			this.config.set(key, target_value)
		}
		let f = () => {func(this.config)}

		item.addEventListener("click", write)
		item.addEventListener("click", handleState)
		if (func) item.addEventListener("click", f)

		handleState()
		if (func && this.config.changed(key)) f()
		document.getElementById("settings").appendChild(item)
		return item
	}

	checkLocalStorage() {
		let warn = document.getElementById("no-cookies").classList
		if (this.config.storageAvailable) warn.add("hidden")
	}
}