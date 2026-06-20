<script>
    import { onDestroy, onMount } from "svelte";
    import Background from "./Background.svelte";
    import { className } from "./engine/utils";
    import { CONFIG, isDev, isDeviceDark } from "./engine/variables";
    import Main from "./Pages/Main.svelte";

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

	const darkMode = (conf, isDD) => {
		if (conf == "auto" && isDD) return  "dark"
		if (conf == "dark") return "dark"
	}


</script>

{#if $CONFIG?.client}
	<main class="
		{className(!$CONFIG.client.blur, "noblur")}
		{className($CONFIG.client.animations == "disabled", "noanime")}
		{darkMode($CONFIG.client.dark_mode, $isDeviceDark)}
	">
		<Background />
		<Main />
	</main>
{/if}

<style>
	main.dark {
		color: #EEE;
	}
</style>
