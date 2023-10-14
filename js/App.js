import Drawer from "./UI/Drawer/Drawer"
import Home from "./UI/Home/Home"
import Main from "./UI/Main/Main"
import Settings from "./UI/Settings/Settings"
import Config from "./Utils/Config"
import { showPage } from "./Utils/DOMUtils"


export default class App {
	static instance

	constructor(config) {
		if (App.instance) return App.instance
		App.instance = this
		this.config = new Config(config)
		this.init()
	}

	init() {
		this.main = new Main()
		this.home = new Home()
		this.drawer = new Drawer()
		this.settings = new Settings()

		showPage("home")
		document.body.classList.add("loaded")
	}
}
