import { writable } from "svelte/store";

export const isDev = import.meta.env.DEV

export let hash = writable("")
const updateHash = () => {
	let h = window.location.hash
	if (h == "") h = "#"
	hash.set(h)
}
window.addEventListener("DOMContentLoaded", updateHash)
window.addEventListener("hashchange", updateHash)

export let CONFIG = writable({})
