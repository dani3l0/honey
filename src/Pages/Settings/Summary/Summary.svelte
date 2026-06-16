<script>
    import Check from "./Check.svelte";

</script>
<div class="summary">
	<div class="rocket-big">
		<span class="material-symbols-outlined">rocket_launch</span>
		<div class="text">
			<div class="count">17</div>
			<div class="note">services</div>
		</div>
	</div>
	<div class="checks">
		<Check icon="settings" color="#F55" name="Fully independent" value="No single external dependency found" />
		<Check icon="settings" color="#0F8" name="Fully independent" value="No single external dependency found" />
		<Check icon="settings" color="#0FF" name="Fully independent" value="No single external dependency found" />
		<Check icon="settings" color="#FB0" name="Fully independent" value="No single external dependency found" />
	</div>
</div>
