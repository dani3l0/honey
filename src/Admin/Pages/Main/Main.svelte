<script>
    import { className } from "../../../App/engine/utils";
    import BigName from "../../components/BigName.svelte";
    import Item from "./Item.svelte";

</script>


<div>
	<div style:margin-top="108px"></div>
	<BigName title="honey" subtitle="Configuration page" />

	<div class="items">
		<Item
			target="#services"
			icon="apps"
			name="Services"
			description="Manage available services and their URLs"
			color={100}
		/>
		<Item
			target="#defaults"
			icon="palette"
			name="Defaults"
			description="Customize default settings for dashboard"
			color={270}
		/>
		<Item
			target="#personalization"
			icon="format_paint"
			name="Personalization"
			description="Make honey uniquely yours"
			color={330}
		/>
		<Item
			target="#system"
			icon="discover_tune"
			name="System"
			description="Define advanced backend behavior"
			color={60}
		/>
		<Item
			target="#icons"
			icon="deceased"
			name="Icons"
			description="Upload, find or delete icons"
			color={30}
		/>
		<Item
			target="#backgrounds"
			icon="wallpaper"
			name="Backgrounds"
			description="Upload, find or delete backgrounds"
			color={0}
		/>
		<Item
			target="#admin"
			icon="password"
			name="Admin"
			description="Manage admin page and login credentials"
			color={230}
		/>
		<Item
			target="#about"
			icon="info"
			name="About"
			description="Some information about the project"
			color={160}
		/>
	</div>
</div>


<style>
	.items {
		display: flex;
		align-items: stretch;
		justify-content: center;
		flex-wrap: wrap;
		gap: 8px;
		padding: 12px;
	}
</style>
