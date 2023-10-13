export function showPage(target) {
	let bg = document.getElementById("background").classList
	if (target == "home") bg.add("scaled")
	else bg.remove("scaled")

	let pages = document.getElementsByClassName("page")
	for (let page of pages) {
		let p = page.getAttribute("p")
		if (p == target) page.classList.add("current")
		else page.classList.remove("current")
	}
}
