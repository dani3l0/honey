import App from "../../App"

export default class Main {
	constructor() {
		this.app = new App()
		this.config = this.app.config
		this.init()
	}

	init() {
		document.title = this.config.get("name")
		this.initBackgrounds()
	}

	initBackgrounds() {
		this.backgrounds = document.getElementById("background")
		for (let i = 0; i < 2; i++) {
			let img = document.createElement("img")
			this.backgrounds.appendChild(img)
		}

		this.backgrounds = this.backgrounds.children
		this.backgrounds[0].src = this.config.get("wallpaper")
		this.backgrounds[1].src = this.config.get("wallpaper_dark")
	}
}
