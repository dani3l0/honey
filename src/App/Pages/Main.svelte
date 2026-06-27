<script>
	import Apps from "./Apps/Apps.svelte";
	import Home from "./Home/Home.svelte";
	import Settings from "./Settings/Settings.svelte";
	import { CONFIG } from "../engine/variables";

</script>

{#if $CONFIG?.client}
	<Home />
	<Apps />
	<Settings />
{/if}
