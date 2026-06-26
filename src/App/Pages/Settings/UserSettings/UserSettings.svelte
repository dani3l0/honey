<script>
    import { className } from "../../../engine/utils";
    import { CONFIG, hash } from "../../../engine/variables";
    import List from "./List.svelte";
    import MultiSwitch from "./MultiSwitch.svelte";
    import Switch from "./Switch.svelte";

    let { height = $bindable() } = $props()

</script>


<div class="user-settings {className($hash != "#settings", "hidden")}" bind:clientHeight={height}>
	<MultiSwitch
		icon="dark_mode"
		name="Dark mode"
		desc="Switch between light and dark color compositions"
		values={{
			"auto": "Auto",
			"light": "Light",
			"dark": "Dark"
		}}
		bind:value={$CONFIG.client.dark_mode}
	/>

	<Switch
		icon="blur_on"
		name="Blur"
		desc="Greatly improves UI sweetness but has massive impact on performance"
		bind:value={$CONFIG.client.blur}
	/>

	<Switch
		icon="open_in_new"
		name="New tab"
		desc="When a service is clicked, open it in new tab"
		bind:value={$CONFIG.client.open_in_new_tab}
	/>

	<List icon="timer" name="Animations" desc="Set animations duration, or disable them completely" values={{
		"disabled": "Disabled",
		"short": "Short",
		"default": "Default",
		"long": "Long",
	}} valWidth={144} bind:value={$CONFIG.client.animations} />
</div>


<style>
	.user-settings {
		flex: 1;
		width: 100%;
		transition: all .3s;
	}
	.user-settings.hidden {
		pointer-events: none;
	}
</style>
