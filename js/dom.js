function get(id) {
	return document.getElementById(id);
}
function for_all(class_name, func) {
	let a = document.getElementsByClassName(class_name);
	for (let i = 0; i < a.length; i++) {
		func(a[i]);
	}
}
function load_img(img) {
	img.classList.remove("unloaded");
}
function get_background() {
	let bg = get("background");
	return bg.children[1-bg.classList.contains("dark")];
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