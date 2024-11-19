import App from "../../App";
import PingService from "../../Utils/PingService";

export default class Drawer {
	constructor() {
		this.app = new App()
		this.config = this.app.config
		this.init()
	}

	init() {
		this.importApps()
	}

	importApps() {
		let apps = this.config.getServices()
		let enablePingDots = this.config.get("ping_dots")
		let applist = document.querySelector("#app-list")
		applist.innerHTML = ""
		for (let app of apps) {
			let a = document.createElement("a")
			a.classList.add("box")
			a.href = app.href
			a.innerHTML = `
				<img src="${app.icon}">
				<div>
					<div class="name">${app.name}</div>
					<div class="desc">${app.desc}</div>
				</div>`

			if (enablePingDots) {
				a.classList.add("pingdot")
				PingService(app.href, status => {
					if (!status) return
					let resp = "down"
					if (status >= 200 && status < 400) resp = "up"
					else if (status >= 400) resp = "error"
					a.classList.add(resp)
				})
			}

			applist.appendChild(a)
		}
	}
}
