<script>
    import { className } from "../../../engine/utils";
    import { CONFIG, hash } from "../../../engine/variables";
    import List from "./List.svelte";
    import Switch from "./Switch.svelte";

    let { height = $bindable() } = $props()

</script>


<div class="user-settings {className($hash != "#settings", "hidden")}" bind:clientHeight={height}>
	<Switch
		icon="settings"
		name="Platform dark mode"
		desc="Sync dark mode with your device's native OS"
		bind:value={$CONFIG.client.dark_mode}
	/>

	<Switch
		icon="settings"
		name="Dark mode"
		desc="Manually switch between light and dark color compositions"
		bind:value={$CONFIG.client.device_dark_mode}
	/>

	<Switch
		icon="settings"
		name="Blur"
		desc="Manually switch between light and dark color compositions"
		bind:value={$CONFIG.client.blur}
	/>

	<Switch
		icon="settings"
		name="New tab"
		desc="Manually switch between light and dark color compositions"
		bind:value={$CONFIG.client.open_in_new_tab}
	/>

	<Switch
		icon="settings"
		name="Animations"
		desc="Manually switch between light and dark color compositions"
		bind:value={$CONFIG.client.animations}
	/>

	<List icon="settings" name="Animation duration" desc="Decide how long smooth UI transitions should be" values={{
		"disabled": "Disabled",
		"short": "Short",
		"default": "Default",
		"long": "Long",
	}} valWidth={144} bind:value={$CONFIG.client.animations_duration} />
</div>


<style>
	.user-settings {
		flex: 1;
		width: 100%;
		transition: all .3s;
	}
	.user-settings.hidden {
		opacity: 0;
		pointer-events: none;
	}
</style>
