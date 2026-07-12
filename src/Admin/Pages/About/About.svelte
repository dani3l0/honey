<script>
    import AboutComponent from "../../../App/Pages/Settings/About/AboutComponent.svelte";
	import Header from "../../components/Header.svelte";

</script>


<div>
	<Header icon="info" title="About" color={160} />

	<div class="about-wrapper">
		<AboutComponent />
	</div>
</div>


<style>
	.about-wrapper {
		padding: 96px 12px 24px;
		margin: 12px auto;
		max-width: 960px;
		border-radius: 24px;
		background: #EEE;
	}
</style>
