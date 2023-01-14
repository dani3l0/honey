function onload() {
	for_all("back", (btn) => {
		btn.onclick = back;
	});
	switch_theme(true);
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

var is_dark = false;
function switch_theme(value) {
	back();
	if (value === undefined) value = !is_dark; 
	is_dark = value;
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