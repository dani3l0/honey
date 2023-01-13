function onload() {
	for_all("back", (btn) => {
		btn.onclick = back;
	});
	back();
}

function show(id) {
	for_all("page", (page) => {
		page.classList.add("hidden");
	});
	get(id).classList.remove("hidden");
	get(id).scrollTop = 0;
	get("background").classList.remove("scaled");
}
function back() {
	show("page-home");
	get("background").classList.add("scaled");
}