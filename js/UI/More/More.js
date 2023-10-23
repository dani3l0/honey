import App from "../../App";
import Privacy from "./Privacy/Privacy";
import Settings from "./Settings/Settings";


export default class More {
	constructor() {
		this.app = new App()
		this.config = this.app.config
		this.privacy = new Privacy()
		this.settings = new Settings()
		this.init()
	}

	init() {
		this.privacy.init()
		this.settings.init()
		this.initPager()
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
}
