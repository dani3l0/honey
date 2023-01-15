function get(id) {
	return document.getElementById(id);
}

function get_class(class_name, parent) {
	if (!parent) parent = document;
	return parent.getElementsByClassName(class_name);
}

function for_all(class_name, func, parent) {
	let a = get_class(class_name, parent);
	for (let i = 0; i < a.length; i++) {
		func(a[i]);
	}
}

function load_img(img) {
	img.classList.remove("unloaded");
}

function get_background() {
	let bg = get("background");
	return bg.children[1-1+bg.classList.contains("dark")];
}

function safe_text(text) {
	text = text.replaceAll("<", "&lt;");
	text = text.replaceAll(">", "&gt;");
	text = text.replaceAll("&", "&amp;");
	return text;
}

function mk_entry(app) {
	return `
		<a class="box" href="${safe_text(app["href"])}">
			<img src="${safe_text(app["icon"])}">
			<div>
				<div class="name">${safe_text(app["name"])}</div>
				<div class="desc">${safe_text(app["desc"])}</div>
			</div>
		</a>`;
}

function config(key, value) {
	let def = CONFIG["ui"][key];
	let val = localStorage.getItem(key);
	if (def == value && !val) return;
	if (value !== undefined) {
		localStorage.setItem(key, value);
		return;
	}
	if (!val) val = CONFIG["ui"][key].toString();
	return val;
}

function get_bool(key) {
	return config(key) == "true";
}