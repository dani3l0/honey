<script>
    import CloseButton from "../../components/CloseButton.svelte";

</script>
<div class="header">
	<div class="title">
		<span class="material-symbols-rounded">apps</span>
		<div>Services</div>
	</div>
	<div class="button">
		<CloseButton />
	</div>
</div>


<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px;
	}

	.title {
		display: flex;
		align-items: center;
		font-size: 1.75rem;
	}
	.title span {
		font-size: 32px;
		margin: 0 16px;
	}
</style>
