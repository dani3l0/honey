export function showPage(target) {
	target = target.replaceAll("#", "")
	if (!target.length) target = "home"

	let bg = document.querySelector("#background").classList
	target == "home" ? bg.add("scaled") : bg.remove("scaled")
	window.location.hash = target == "home" ? "" : target
	
	let pages = document.querySelectorAll(".page")
	for (let page of pages) {
		let p = page.getAttribute("p")
		if (p == target) page.classList.add("current")
		else page.classList.remove("current")
	}

}
