import App from "./App"

window.addEventListener("DOMContentLoaded", () => {
	let xhr = new XMLHttpRequest()
	xhr.open("GET", "config/config.json")
	xhr.onload = function() {
		let config = JSON.parse(this.responseText)
		window.app = new App(config)
	}
	xhr.send()
})
