<script>
    import { className } from "../../engine/utils";
    import { hash } from "../../engine/variables";
    import About from "./About/About.svelte";
    import Header from "./Header.svelte";
    import Summary from "./Summary/Summary.svelte";
    import UserSettings from "./UserSettings/UserSettings.svelte";

   	let titles = ["Summary", "Settings", "About"]
	let hashes = ["#summary", "#settings", "#about"]

</script>
<div class="settings {className(!["#summary", "#settings", "#about"].includes($hash), "hidden")}">
	<Header {titles} {hashes} />
	<div class="container"
		style:--items={titles.length}
		style:--position={hashes.indexOf($hash)}
	>
		<Summary />
		<UserSettings />
		<About />
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
