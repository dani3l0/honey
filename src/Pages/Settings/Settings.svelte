<script>
    import { className } from "../../engine/utils";
    import { hash } from "../../engine/variables";
    import About from "./About/About.svelte";
    import Header from "./Header.svelte";
    import Summary from "./Summary/Summary.svelte";
    import UserSettings from "./UserSettings/UserSettings.svelte";

</script>
<div class="settings {className(!["#summary", "#settings", "#about"].includes($hash), "hidden")}">
	<Header />
	<div class="container">
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
		transform: translateX(-50%);
		box-shadow: 8px 8px 24px #0004;
		left: 50%;
		padding: 6px;
		background: #FFFB;
		backdrop-filter: blur(32px);
		border-radius: 20px;
		transition: all .3s .1s;
	}
	.settings.hidden {
		top: 80px;
		opacity: 0;
		pointer-events: none;
		transition: all .3s;
	}
</style>
