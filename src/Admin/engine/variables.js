import { writable } from "svelte/store";

export let isLoggedIn = writable(false)
export let authData = writable({})

export let hash = writable(window.location.hash)
window.addEventListener("hashchange", () => {
	let hh = window.location.hash
	if (!hh.length) hh = "#"
	hash.set(hh)
})

export let configMain = writable({})
export let configSystem = writable({})
export const getConfigs = async () => {
	let respMain = await fetch("/api/config")
	if (respMain.ok) configMain.set((await respMain.json()).data)

	let respSystem = await fetch("/api/admin/getSystem", {
		credentials: "include"
	})
	if (respSystem.ok) configSystem.set((await respSystem.json()).data)
}
window.addEventListener("hashchange", getConfigs)
