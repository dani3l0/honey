function get(id) {
	return document.getElementById(id);
}

function set(id, text) {
	get(id).innerText = text;
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
	let new_tab = get_bool("open_new_tab") ? ` target="_blank"` : "";
	return `
		<a class="box" href="${safe_text(app["href"])}"${new_tab}>
			<img src="${safe_text(app["icon"])}">
			<div>
				<div class="name">${safe_text(app["name"])}</div>
				<div class="desc">${safe_text(app["desc"])}</div>
			</div>
		</a>`;
}

function check_cookies() {
	try {
		localStorage;
		return true;
	}
	catch {
		return false;
	}
}

function config(key, value) {
	let write = value !== undefined;
	if (check_cookies()) {
		let val = localStorage.getItem(key);
		if (CONFIG["ui"][key] == value && !val) return;
		if (write) localStorage.setItem(key, value);
		return val;
	}
	if (write) CONFIG["ui"][key] = value.toString();
	return CONFIG["ui"][key].toString();
}

function get_bool(key) {
	return config(key) == "true";
}

function load_config(conf) {
	CONFIG_DEFAULT = conf;
	if (conf) CONFIG = JSON.parse(conf);
	let ui = CONFIG.ui;
	set("app-name", ui.name);
	set("app-desc", ui.desc);
	get("app-icon").src = ui.icon;
	if (!check_cookies()) get("nocook").classList.remove("none");
	if (ui.hosted_by) set("app-hostedby", ui.hosted_by);
	else get("app-hostedby").parentNode.style.display = "none";
	load_apps();
	switch_theme(get_bool("dark_mode"));
	new_tab_toggle(get_bool("open_new_tab"));
}

function is_secure(uri) {
	let secure = uri.indexOf("tps://") != -1;
	let insecure = uri.indexOf("tp://") != -1;
	if (secure) return true;
	if (insecure) return false;
	return is_secure(location.href);
}