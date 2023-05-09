document.title = "Loading...";
function onload() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "config/config.json");
	xhr.onload = function() {
		load_config(this.responseText);
		for_all("back", (btn) => {
			btn.onclick = show;
		});
		setTimeout(() => {
			show();
			document.body.classList.remove("init");
		}, 50);
	};
	xhr.send();
}

function show(id) {
	if (typeof(id) != "string") id = "page-home";
	CURRENT_VIEW = id;
	for_all("page", (page) => {
		page.classList.add("hidden");
	});
	get(id).classList.remove("hidden");
	get(id).scrollTop = 0;
	let bg = get("background").classList;
	if (CURRENT_VIEW == "page-home") bg.add("scaled");
	else bg.remove("scaled");
}

function switch_theme(value) {
	let is_dark = get_bool("dark_mode");
	if (value === undefined) is_dark = !is_dark; 
	config("dark_mode", is_dark);
	get("css_dark").disabled = !is_dark;
	let bg = get("background").classList;
	let setting = get("setting-theme");
	let icon = get("theme-indicator");
	if (is_dark) {
		setting.classList.add("checked");
		icon.innerText = "dark_mode";
		bg.add("dark");
		get_background().src = CONFIG.ui.wallpaper_dark;
	}
	else {
		setting.classList.remove("checked");
		icon.innerText = "light_mode";
		bg.remove("dark");
		get_background().src = CONFIG.ui.wallpaper;
	}
}

function load_apps() {
	let final = "";
	let secures = 0;
	let i = 0;
	while (i < CONFIG["services"].length) {
		let item = CONFIG["services"][i];
		let app = mk_entry(item);
		final += app;
		i++;
		if (is_secure(item["href"])) secures++;
	}
	get("applist").innerHTML = final;
	set("services-total", i);
	set("services-secure", secures);
	set("security-pp", Math.round(100 * secures / i));
}

function new_tab_toggle(value) {
	let v = get_bool("open_new_tab");
	if (value === undefined) v = !v; 
	config("open_new_tab", v);
	setting = get("setting-newtab").classList;
	v ? setting.add("checked") : setting.remove("checked");
	load_apps();
}

function blur_toggle(value) {
	let v = get_bool("blur");
	if (value === undefined) v = !v; 
	config("blur", v);
	setting = get("setting-blur").classList;
	let body = document.body.classList;
	if (v) {
		setting.add("checked");
		body.remove("noblur");
	}
	else {
		setting.remove("checked");
		body.add("noblur");
	}
}

function reset_all_settings() {
	if (check_cookies()) localStorage.clear();
	load_config(CONFIG_DEFAULT);
}

let S_TAP_LOCK;
function open_screen(button) {
	if (S_TAP_LOCK) return;
	S_TAP_LOCK = true;
	let parent = button.parentNode;
	let cursor = parent.getElementsByClassName("bg")[0];
	let items = parent.getElementsByClassName("entry");
	let clicked_id = 0;
	for (let i = 0; i < items.length; i++) {
		if (items[i] === button) {
			clicked_id = i;
			break;
		}
	}
	cursor.style.left = `${100 * clicked_id / items.length}%`;
	let wrapper = parent.parentNode.parentNode;
	let screens = get_class("screens", wrapper)[0];
	let from_height = screens.clientHeight;
	for_all("screen", (screen) => {
		screen.classList.add("hidden");
	}, wrapper);
	screens.children[clicked_id].classList.remove("hidden");
	let to_height = screens.children[clicked_id].clientHeight;
	screens.style.transform = `translateX(calc(-${clicked_id}% * (100 / var(--screens))))`;
	screens.style.height = `${from_height}px`;
	setTimeout(() => {
		screens.style.height = `${to_height}px`;
	}, 10);
	setTimeout(() => {
		screens.style.height = null;
		S_TAP_LOCK = false;
	}, 420);
}
