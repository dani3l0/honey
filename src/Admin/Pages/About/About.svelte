<script>
    import AboutComponent from "../../../App/Pages/Settings/About/AboutComponent.svelte";
	import Header from "../../components/Header.svelte";
    import { configSystem } from "../../engine/variables";

</script>


<div>
	<Header icon="info" title="About" color={160} />

	<div class="about-wrapper">
		<AboutComponent />
	</div>

	<div class="additional-info">
		<div class="item">
			<i>Version</i>
			<b>{$configSystem.version}</b>
		</div>
	</div>
</div>


<style>
	.about-wrapper {
		padding: 96px 12px 24px;
		margin: 12px auto;
		max-width: 960px;
		border-radius: 24px;
		background: #8882;
	}

	.additional-info {
		padding: 16px 12px;
		background: #8882;
		max-width: 960px;
		border-radius: 24px;
		margin: 0 auto;
		font-family: monospace;
	}
	.additional-info .item {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin: 12px 8px;
		opacity: .5;
	}
	.additional-info b {
		user-select: text;
	}
</style>
