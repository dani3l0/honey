<script>
	import { className } from "../../../engine/utils";
	import { CONFIG, hash } from "../../../engine/variables";
    import Check from "./Check.svelte";

	let { height = $bindable() } = $props()
</script>


<div class="summary {className($hash != "#summary", "hidden")}" bind:clientHeight={height}>
	<div class="rocket-big">
		<span class="material-symbols-outlined">rocket_launch</span>
		<div class="text">
			<div class="count">{$CONFIG.dashboard_items.length}</div>
			<div class="note">services in total</div>
		</div>
	</div>
	<!-- <div class="checks">
		<Check icon="lock" color="#F55" name="Full encryption" value="All services use secure connections (HTTPS)" />
		<Check icon="settings" color="#4D4" name="Fully independent" value="No single external dependency found" />
		<Check icon="settings" color="#68F" name="Current connection" value="Local Area Network (LAN)" />
	</div> -->
</div>


<style>
	.summary {
		flex: 1;
		width: 100%;
		transition: all .3s;
	}
	.summary.hidden {
		opacity: 0;
		pointer-events: none;
	}

	.rocket-big {
		padding: 96px 0 112px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.rocket-big span {
		font-size: 80px;
	}
	.rocket-big .text {
		text-align: right;
	}
	.rocket-big .count {
		font-size: 4rem;
		margin-bottom: -8px;
	}
	.rocket-big .note {
		opacity: .5;
	}

	.checks {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		max-width: 880px;
		margin: 0 auto;
	}
</style>
