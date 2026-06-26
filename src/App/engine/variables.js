import { writable } from "svelte/store";

// Whether running development server
export const isDev = import.meta.env.DEV

// Location hash
export let hash = writable("")
const updateHash = () => {
	let h = window.location.hash
	if (h == "") h = "#"
	hash.set(h)
}
window.addEventListener("DOMContentLoaded", updateHash)
window.addEventListener("hashchange", updateHash)

// Global configuration
export let CONFIG = writable({})

// Device dark mode
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
export let isDeviceDark = writable(darkModeQuery.matches)
darkModeQuery.addEventListener('change', (event) => {
	isDeviceDark.set(event.matches)
})
export const isDark = () => {
	return document.querySelector("main").classList.contains("dark")
}
