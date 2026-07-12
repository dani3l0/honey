import { get, writable } from "svelte/store"

export let isLoggedIn = writable(false)

// Window Hash Location
export let hash = writable(window.location.hash)
export let onhashchange = () => {
	let hh = window.location.hash
	if (!hh.length) hh = "#"
	hash.set(hh)
}
window.addEventListener("hashchange", onhashchange)

// Configurations
export let configMain = writable({})
export let configMainSnapshot = writable({})
export let configSystem = writable({})
export let configSystemSnapshot = writable({})

export const getConfigs = async () => {
	let respMain = await fetch("/api/config")
	if (respMain.ok) configMain.set((await respMain.json()).data)
	configMainSnapshot.set(structuredClone(get(configMain)))

	let respSystem = await fetch("/api/admin/getSystem", {
		credentials: "include"
	})
	if (respSystem.ok) configSystem.set((await respSystem.json()).data)
	configSystemSnapshot.set(structuredClone(get(configSystem)))
}
window.addEventListener("hashchange", getConfigs)

export const compareConfigs = (configA, configB) => {
	let a = JSON.stringify(configA)
	let b = JSON.stringify(configB)
	return a == b
}
