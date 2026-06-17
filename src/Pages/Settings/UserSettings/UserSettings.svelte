<script>
    import { className } from "../../../engine/utils";
    import { hash } from "../../../engine/variables";
    import List from "./List.svelte";
    import Switch from "./Switch.svelte";

    let { height = $bindable() } = $props()
    let sA = $state(true)
    let sB = $state("100")

</script>


<div class="user-settings {className($hash != "#settings", "hidden")}" bind:clientHeight={height}>
	<Switch icon="settings" name="Switch" desc="Switchin stuff" bind:value={sA} />
	<List icon="settings" name="Longer MultiSwitch" desc="aka List compounento" values={{
		"0": "Disabled",
		"50": "Faster",
		"75": "Fast",
		"100": "Normal",
		"150": "Long",
		"200": "Longer",
	}} valWidth={144} bind:value={sB} />
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
