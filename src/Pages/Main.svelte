<script>
	import { onDestroy, onMount } from "svelte";
	import Apps from "./Apps/Apps.svelte";
	import Home from "./Home/Home.svelte";
	import Settings from "./Settings/Settings.svelte";
	import { CONFIG, isDev } from "../engine/variables";

	let loaded = false
	let unsubscribe

	onMount(async () => {
		let url = isDev ? "http://127.0.0.1:4208/api/getConfig" : "/api/getConfig"
		await fetch(url)
			.then(response => response.json())
			.then(data => {
				let rawJson = data.data
				let rawJsonLocal = JSON.parse(localStorage.getItem("config"))
				if (rawJsonLocal) {
					for (let key in rawJsonLocal) {
						data.data.client[key] = rawJsonLocal[key]
					}
				}
				CONFIG.set(data.data)
				unsubscribe = CONFIG.subscribe(val => {
					if (!loaded) {
						loaded = true
						return
					}
					localStorage.setItem("config", JSON.stringify(val.client))
					console.log(localStorage)
				})
			})
			.catch(error => console.error("Error while fetching config:", error))
	})

	onDestroy(() => {
		if (unsubscribe) unsubscribe()
	})
</script>

{#if $CONFIG?.client}
	<Home />
	<Apps />
	<Settings />
{/if}
