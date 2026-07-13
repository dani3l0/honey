<script>
    import { className } from "../../../engine/utils";
    import { CONFIG, hash } from "../../../engine/variables";
    import List from "./List.svelte";
    import MultiSwitch from "./MultiSwitch.svelte";
    import Switch from "./Switch.svelte";
    import UserSettingsComponent from "./UserSettingsComponent.svelte";

    let { height = $bindable() } = $props()

</script>


<div class="user-settings {className($hash != "#settings", "hidden")}" bind:clientHeight={height}>
	<UserSettingsComponent bind:config={$CONFIG} />
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
