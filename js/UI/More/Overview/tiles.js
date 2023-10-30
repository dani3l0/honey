export function privacyBox(icon, color, name, desc, pp) {
	if (pp == 1) {}
	else if (pp > 0.7) color = "#EA0"
	else if (pp > 0.25) color = "#F72"
	else color = "#F33"

	let item = document.createElement("div")
	item.setAttribute("style", `--color: ${color}`)

	item.innerHTML = `<i>${icon}</i>
		<div>
			<div class="title">${name}</div>
			<div class="subtitle">${desc}</div>
		</div>`

	document.querySelector(".privacy-boxes").appendChild(item)
	return item
}
