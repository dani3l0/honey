import App from "../../App";
import Overview from "./Overview/Overview";
import Settings from "./Settings/Settings";


export default class More {
	constructor() {
		this.app = new App()
		this.config = this.app.config
		this.overview = new Overview()
		this.settings = new Settings()
		this.init()
	}

	init() {
		this.overview.init()
		this.settings.init()
		this.initPager()
	}

	initPager() {
		let switcher = document.querySelector(".subswitch")
		let buttons = switcher.children
		let subsettings = document.querySelector(".subpages")

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
