<script>
    import { className } from "../../engine/utils";
    import { hash } from "../../engine/variables";
    import About from "./About/About.svelte";
    import Header from "./Header.svelte";
    import Summary from "./Summary/Summary.svelte";
    import UserSettings from "./UserSettings/UserSettings.svelte";

   	let titles = ["Summary", "Settings", "About"]
	let hashes = ["#summary", "#settings", "#about"]
	let heights = $state([0, 0, 0])

	let lastHash = $state(hashes[0])
	let position = $state(0)
	$effect(() => {
		if (hashes.includes($hash)) lastHash = $hash
		else setTimeout(() => lastHash = hashes[0], 400)
		position = hashes.indexOf(lastHash)
	})

</script>
<div class="settings {className(!["#summary", "#settings", "#about"].includes($hash), "hidden")}" style:--height="{heights[position]}px">
	<Header {titles} {hashes} {position} />
	<div class="container"
		style:--items={titles.length}
		style:--position={position}
	>
		<Summary bind:height={heights[0]} />
		<UserSettings bind:height={heights[1]} />
		<About bind:height={heights[2]} />
	</div>
</div>


<style>
	.settings {
		position: fixed;
		width: calc(100% - 20px);
		max-width: 960px;
		top: 16px;
		max-height: calc(100% - 32px);
		box-shadow: 8px 8px 24px #0004;
		background: #FFFB;
		backdrop-filter: blur(32px);
		transform: translateX(-50%);
		left: 50%;
		padding: 6px;
		overflow: hidden;
		border-radius: 20px;
		z-index: 2;
		height: calc(96px + var(--height));
		transition: all .3s .1s;
	}
	.settings.hidden {
		top: 80px;
		opacity: 0;
		pointer-events: none;
		transition: all .3s;
	}
	.container {
		max-height: calc(100vh - 128px);
		overflow-y: scroll;
		display: flex;
		position: relative;
		width: calc(100% * var(--items));
		left: calc(-100% * var(--position));
		align-items: flex-start;
		transition: all .3s;
	}
</style>
