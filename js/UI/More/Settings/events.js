const CL = document.body.classList

// Switch between light & dark themes
var onThemeChange_SystemListener = false;
export function onThemeChange(config) {
	let value = config.get("dark_mode")
	let mm = window.matchMedia('(prefers-color-scheme: dark)')
	let isDark = value == "Auto" ? mm.matches : value == "On"
	isDark ? CL.add("dark") : CL.remove("dark")

	// Listen for system theme changes
	if (!onThemeChange_SystemListener) {
		onThemeChange_SystemListener = true
		mm.addEventListener('change', event => {
			if (config.get("dark_mode") == "Auto") {
				let isDark = event.matches;
				isDark ? CL.add("dark") : CL.remove("dark")
			}
		});
	}
}

// Open apps in new tab
export function onNewTabChange(config) {
	let openNewTab = config.get("open_new_tab")
	let appList = document.querySelector("#app-list").children

	for (let app of appList) {
		if (openNewTab) app.setAttribute("target", "_blank")
		else app.removeAttribute("target") 
	}
}

// Enable/disable background blur
export function onBlurChange(config) {
	let blur = config.get("blur")
	blur ? CL.remove("noblur") : CL.add("noblur")
}

// Enable/disable animations
export function onAnimationChange(config) {
	let animations = config.get("animations")
	animations ? CL.remove("noanim") : CL.add("noanim")
}
