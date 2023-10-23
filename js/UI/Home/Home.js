import App from "../../App"
import { showPage } from "../../Utils/DOMUtils"


export default class Home {
	constructor() {
		this.app = new App()
		this.config = this.app.config
		this.init()
	}

	init() {
		this.initButtons()
		this.initHomeUI()
		this.initBackButtons()
	}

	initButtons() {
		let buttons = document.getElementsByClassName("buttons")[0].children
		for (let button of buttons) {
			let target = button.getAttribute("t")
			if (target) {
				button.addEventListener("click", () => {
					showPage(target)
				})
			}
		}
	}

	initBackButtons() {
		let backButtons = document.getElementsByClassName("back")
		for (let button of backButtons) {
			button.addEventListener("click", () => {
				showPage("home")
			})
		}
	}

	initHomeUI() {
		let logo = document.getElementById("app-icon")
		logo.src = this.config.get("icon")
		logo.classList.add("notloaded")
		logo.addEventListener("load", () => {
			logo.classList.remove("notloaded")
		})

		let name = document.getElementById("app-name")
		name.innerText = this.config.get("name")

		let desc = document.getElementById("app-desc")
		desc.innerText = this.config.get("desc")
	}
}