<script>
	import List from "../../../App/Pages/Settings/UserSettings/List.svelte";
	import MultiSwitch from "../../../App/Pages/Settings/UserSettings/MultiSwitch.svelte";
	import Switch from "../../../App/Pages/Settings/UserSettings/Switch.svelte";
	import Header from "../../components/Header.svelte";
	import { configMain } from "../../engine/variables";

</script>


<div>
	<Header icon="palette" title="Defaults" color={270} />

	<!-- Settings, best if synced with App/Pages/Settings/UserSettings/UserSettings.svelte -->
	<div class="settings">
		<MultiSwitch
			icon="dark_mode"
			name="Dark mode"
			desc="Switch between light and dark color compositions"
			values={{
				"auto": "Auto",
				"light": "Light",
				"dark": "Dark"
			}}
			bind:value={$configMain.client.dark_mode}
		/>

		<Switch
			icon="blur_on"
			name="Blur"
			desc="Greatly improves UI sweetness but has massive impact on performance"
			bind:value={$configMain.client.blur}
		/>

		<Switch
			icon="open_in_new"
			name="New tab"
			desc="When a service is clicked, open it in new tab"
			bind:value={$configMain.client.open_in_new_tab}
		/>

		<List icon="timer" name="Animations" desc="Set animations duration, or disable them completely" values={{
			"disabled": "Disabled",
			"short": "Short",
			"default": "Default",
			"long": "Long",
		}} valWidth={144} bind:value={$configMain.client.animations} />
	</div>
</div>


<style>
	.settings {
		max-width: 960px;
		margin: 0 auto;
	}
</style>
