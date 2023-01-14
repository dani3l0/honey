var UI = {
	"dark_mode": false
}
var SERVICES = [
	{
		"name": "CalDav",
		"desc": "Simple CalDav server for calendar sync between various devices.",
		"href": "caldav",
		"icon": "img/preview/caldav.png"
	},
	{
		"name": "Files",
		"desc": "Fancy file manager for the web.",
		"href": "files",
		"icon": "img/preview/files.png"
	},
	{
		"name": "Gallery",
		"desc": "Photo & video gallery syncable with multiple Android devices.",
		"href": "gallery",
		"icon": "img/preview/gallery.png"
	},
	{
		"name": "Git",
		"desc": "Self-hosted, painless, secure place for your repositories.",
		"href": "git",
		"icon": "img/preview/git.png"
	},
	{
		"name": "E-Mail",
		"desc": "Feature-rich, decentralized and secure E-Mail server.",
		"href": "mail",
		"icon": "img/preview/mail.png"
	},
	{
		"name": "Music",
		"desc": "Beautiful, moody music streaming app.",
		"href": "music",
		"icon": "img/preview/music.png"
	},
	{
		"name": "Notes",
		"desc": "Sweet & lightweight app for taking notes.",
		"href": "notes",
		"icon": "img/preview/notes.png"
	}
]

function config(key, value) {
	let def = UI[key];
	let val = localStorage.getItem(key);
	if (def == value && !val) return;
	if (value !== undefined) {
		localStorage.setItem(key, value);
		return;
	}
	if (!val) val = UI[key].toString();
	return val;
}

function onload() {
	for_all("back", (btn) => {
		btn.onclick = back;
	});
	switch_theme(config("dark_mode") == "true");
	load_apps();
	setTimeout(() => {
		back();
		document.body.classList.remove("init");
	}, 50)
}

function show(id) {
	for_all("page", (page) => {
		page.classList.add("hidden");
	});
	get(id).classList.remove("hidden");
	get(id).scrollTop = 0;
	get_background().classList.remove("scaled");
}
function back() {
	show("page-home");
	get_background().classList.add("scaled");
}

function switch_theme(value) {
	back();
	let is_dark = config("dark_mode") == "true";
	if (value === undefined) value = !is_dark; 
	is_dark = value;
	config("dark_mode", is_dark);
	get("css_dark").disabled = !is_dark;
	let bg_box = get("background").classList;
	if (is_dark) {
		get("theme-indicator").innerText = "dark_mode";
		bg_box.add("dark");
		get_background().src = "img/background-dark.jpg";
	}
	else {
		get("theme-indicator").innerText = "light_mode";
		bg_box.remove("dark");
		get_background().src = "img/background.jpg";
	}
}

function load_apps() {
	let final = "";
	for (let i = 0; i < SERVICES.length; i++) {
		let app = mk_entry(SERVICES[i]);
		final += app;
	}
	get("applist").innerHTML = final;
}