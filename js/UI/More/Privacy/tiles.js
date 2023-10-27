export function privacyBox(icon, name, desc) {
	let item = document.createElement("div")
	item.innerHTML = `<i class="${icon}"></i>
		<div>
			<div class="title">${name}</div>
			<div class="subtitle">${desc}</div>
		</div>`

	document.getElementById("report-boxes").appendChild(item)
	return item
}
