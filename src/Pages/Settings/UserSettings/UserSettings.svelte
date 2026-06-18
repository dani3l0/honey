<script>
    import { className } from "../../../engine/utils";
    import { CONFIG, hash } from "../../../engine/variables";
    import List from "./List.svelte";
    import Switch from "./Switch.svelte";

    let { height = $bindable() } = $props()

</script>


<div class="user-settings {className($hash != "#settings", "hidden")}" bind:clientHeight={height}>
	<Switch
		icon="devices"
		name="Platform dark mode"
		desc="Sync dark mode with your device's native OS"
		bind:value={$CONFIG.client.dark_mode}
	/>

	<Switch
		icon="dark_mode"
		name="Dark mode"
		desc="Manually switch between light and dark color compositions"
		bind:value={$CONFIG.client.device_dark_mode}
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

	<Switch
		icon="motion_blur"
		name="Animations"
		desc="Enable smooth transitions in UI"
		bind:value={$CONFIG.client.animations}
	/>

	<List icon="timer" name="Animation duration" desc="How long animations should be" values={{
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
