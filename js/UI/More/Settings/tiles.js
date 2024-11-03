export function addOnOffTile(conf, icon, name, desc, key, func) {
	let item = document.createElement("div")
	item.classList.add("setting")
	item.classList.add("pointer")
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
	if (func) f()

	document.querySelector("#settings").appendChild(item)
	return item
}

export function addOptionsTile(conf, icon, name, desc, key, func) {
	let options = ["Auto", "Off", "On"]
	let optionsHtml = document.createElement("div")
	optionsHtml.classList.add("options")

	let handleState = () => {
		let c = optionsHtml
		let value = conf.get(key)
		let n = options.indexOf(value)
		for (let i = 0; i < options.length; i++) {
			let cl = c.children[i].classList
			if (i == n) cl.add("active")
			else cl.remove("active")
		}
		c.setAttribute("style", `--item: ${n}; --items: ${options.length}`)
	}

	let write = (val) => {
		conf.set(key, val)
	}

	let f = () => {func(conf)}

	options.forEach(e => {
		let node = document.createElement("div")
		node.innerText = e
		node.addEventListener("click", () => {
			write(e)
			handleState()
			if (func) f()
		})
		optionsHtml.appendChild(node)
	})

	handleState()
	if (func) f()

	let item = document.createElement("div")
	item.classList.add("setting")
	item.innerHTML = `
		<i>${icon}</i>
		<div class="text">
			<div class="name">${name}</div>
			<div class="desc">${desc}</div>
		</div>`
	item.appendChild(optionsHtml)

	document.querySelector("#settings").appendChild(item)
	return item
}
