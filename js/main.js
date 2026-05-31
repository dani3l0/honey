import App from "./App"
import { showPage } from "./Utils/DOMUtils"

window.addEventListener("DOMContentLoaded", () => {
	let xhr = new XMLHttpRequest()
	xhr.open("GET", "config/config.json")
	xhr.onload = function() {
		let config = JSON.parse(this.responseText)
		window.app = new App(config)
	}
	xhr.send()
})

window.addEventListener("hashchange", () => {
	showPage(window.location.hash)
})
