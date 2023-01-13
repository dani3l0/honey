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
