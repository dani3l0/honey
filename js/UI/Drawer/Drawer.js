import App from "../../App";

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
		let applist = document.getElementById("app-list");
		for (let app of apps) {
			applist.innerHTML += `<a class="box" href="${app.href}">
				<img src="${app.icon}">
				<div>
					<div class="name">${app.name}</div>
					<div class="desc">${app.desc}</div>
				</div>
			</a>`
		}
	}
}