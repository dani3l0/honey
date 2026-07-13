<script>
	import { get } from "svelte/store";
	import Header from "../../components/Header.svelte";
	import Input from "../../components/Input.svelte";
	import { configSystem } from "../../engine/variables";
	import Switch from "../../../App/Pages/Settings/UserSettings/Switch.svelte";
</script>


<div>
	<Header icon="discover_tune" title="System" color={40} />

	<Input
		icon="host"
		name="Listen address"
		description="Address and port app will be available on"
		bind:value={$configSystem.listen_addr}
	/>

	<Switch icon="tenancy" name="Is under subdomain" bind:value={$configSystem.is_under_subdomain}>
		Changes how third-party domains are detected.<br><div class="tiny"></div>
		· Enable if Honey and your apps use different subdomains:<br>e.g. door.example.com and chair.example.com<br><div class="tiny"></div>
		· Disable if Honey uses the root domain and apps use subdomains<br>e.g. example.com and chair.example.com
	</Switch>

	<Input
		icon="cookie"
		name="Cookie lifetime"
		description="How long will it take to log you out from admin panel; value in nanoseconds"
		bind:value={$configSystem.cookie_lifetime}
	/>

	<Input
		icon="folder_eye"
		name="Icons directory"
		description="Where the folder will all your icons is"
		bind:value={$configSystem.static_icons_dir}
	/>

	<Input
		icon="perm_media"
		name="Backgrounds directory"
		description="Path to folder with all you backgrounds to choose"
		bind:value={$configSystem.static_backgrounds_dir}
	/>

</div>


<style>
	.tiny {
		height: 6px;
	}
</style>
