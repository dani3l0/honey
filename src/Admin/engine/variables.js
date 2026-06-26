import { writable } from "svelte/store";

export let isLoggedIn = writable(false)
export let authData = writable({})

export let hash = writable(window.location.hash)
window.addEventListener("hashchange", () => {
	let hh = window.location.hash
	if (!hh.length) hh = "#"
	hash.set(hh)
})
