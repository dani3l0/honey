import { get, writable } from "svelte/store"

export let isLoggedIn = writable(false)

// Window Hash Location
export let hash = writable(window.location.hash)
export let onhashchange = () => {
	let hh = window.location.hash
	if (!hh.length) hh = "#"
	hash.set(hh)
	fetchConfigs()
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

export const compareConfigs = (configA, configB) => {
	let a = JSON.stringify(configA)
	let b = JSON.stringify(configB)
	return a == b
}

// Backgrounds & Icons
export let iconsList = writable([])
export let backgroundsList = writable([])

export const getIcons = async () => {
	let resp = await fetch("/api/admin/listIcons")
	if (!resp.ok) return
	let jsoned = await resp.json()
	let contents = jsoned.data
	iconsList.set(contents)
}
export const getBackgrounds = async () => {
	let resp = await fetch("/api/admin/listBackgrounds")
	if (!resp.ok) return
	let jsoned = await resp.json()
	let contents = jsoned.data
	backgroundsList.set(contents)
}

// HashChange event to fetch configs
const fetchConfigs = async () => {
	let h = get(hash)
	if (h == "#icons") await getIcons()
	else if (h == "#backgrounds") await getBackgrounds()
	else await getConfigs()
}
