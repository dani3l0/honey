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
		let buttons = document.querySelector(".buttons").children
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
		let backButtons = document.querySelectorAll(".back")
		for (let button of backButtons) {
			button.addEventListener("click", () => {
				showPage("home")
			})
		}
	}

	initHomeUI() {
		let logo = document.querySelector(".appicon")
		logo.src = this.config.get("icon")
		logo.classList.add("notloaded")
		logo.addEventListener("load", () => {
			logo.classList.remove("notloaded")
		})

		let name = document.querySelector(".appname")
		name.innerText = this.config.get("name")

		let desc = document.querySelector(".appdesc")
		desc.innerText = this.config.get("desc")
	}
}