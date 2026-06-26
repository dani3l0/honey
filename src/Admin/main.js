import { mount } from "svelte";
import Admin from "./Admin.svelte";
import "../App/main.css"

const admin = mount(Admin, {
	target: document.getElementById("admin-app"),
});

export default admin;
