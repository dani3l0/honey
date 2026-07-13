<script>
	import Header from "../../components/Header.svelte";
    import Input from "../../components/Input.svelte";
    import { configMain } from "../../engine/variables";

</script>


<div>
	<Header icon="format_paint" title="Personalization" color={330} />

	<Input
		icon="match_case"
		name="Name"
		description="That big app name text on main screen"
		bind:value={$configMain.personalization.name}
	/>
	<Input
		icon="short_text"
		name="Description"
		description="Small, short text under the big app name"
		bind:value={$configMain.personalization.description}
	/>
	<Input
		icon="deceased"
		name="Favicon"
		description="Icon that shows up on main screen and on your browser tab"
		bind:value={$configMain.personalization.favicon}
	/>
	<Input
		icon="wall_art"
		name="Background image"
		description="Wallpaper visible on light mode"
		bind:value={$configMain.personalization.background_image}
	/>
	<Input
		icon="wall_art"
		name="Dark background image"
		description="Wallpaper visible on dark mode"
		bind:value={$configMain.personalization.background_image_dark}
	/>
</div>
