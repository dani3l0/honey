export function privacyBox(privacyScore, icon_class, levels) {
	let name, desc
	levels = levels.reverse()

	for (let i in levels) {
		let item = levels[i]
		if (item.from <= privacyScore) {
			name = levels[i].name
			desc = levels[i].desc
			break
		}
	}

	let item = document.createElement("div")
	item.innerHTML = `<i class="${icon_class}"></i>
		<div>
			<div class="title">${name}</div>
			<div class="subtitle">${desc}</div>
		</div>`

	if (privacyScore < 30) item.classList.add("error")
	else if (privacyScore < 90) item.classList.add("warn")
	else if (privacyScore < 100) item.classList.add("prewarn")

	document.getElementById("report-boxes").appendChild(item)
	return item
}
