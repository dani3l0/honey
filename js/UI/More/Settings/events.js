const CL = document.body.classList

export function onThemeChange(config) {
	let isDark = config.get("dark_mode")
	isDark ? CL.add("dark") : CL.remove("dark")
}

export function onNewTabChange(config) {
	let openNewTab = config.get("open_new_tab")
	let appList = document.getElementById("app-list").children

	for (let app of appList) {
		if (openNewTab) app.setAttribute("target", "_blank")
		else app.removeAttribute("target") 
	}
}

export function onBlurChange(config) {
	let blur = config.get("blur")
	blur ? CL.remove("noblur") : CL.add("noblur")
}

export function onAnimationChange(config) {
	let animations = config.get("animations")
	animations ? CL.remove("noanim") : CL.add("noanim")
}
