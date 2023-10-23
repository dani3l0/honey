export function addOnOffTile(conf, icon, name, desc, key, func) {
	let item = document.createElement("div")
	item.classList.add("setting")
	item.innerHTML = `
		<i>${icon}</i>
		<div class="text">
			<div class="name">${name}</div>
			<div class="desc">${desc}</div>
		</div>
		<div class="switch"></div>`

	let handleState = () => {
		let c = item.classList
		if (conf.get(key)) c.add("checked")
		else c.remove("checked")
	}

	let write = () => {
		let target_value = !conf.get(key)
		conf.set(key, target_value)
	}

	let f = () => {func(conf)}

	item.addEventListener("click", write)
	item.addEventListener("click", handleState)
	if (func) item.addEventListener("click", f)

	handleState()
	if (func && conf.changed(key)) f()
	document.getElementById("settings").appendChild(item)
	return item
}