<script>
    import UserSettingsComponent from "../../../App/Pages/Settings/UserSettings/UserSettingsComponent.svelte";
	import Header from "../../components/Header.svelte";
	import { configMain } from "../../engine/variables";

</script>


<div>
	<Header icon="palette" title="Defaults" color={270} />

	<div class="settings">
		<UserSettingsComponent bind:config={$configMain} />
	</div>
</div>


<style>
	.settings {
		max-width: 960px;
		margin: 0 auto;
	}
</style>
