<script>
	import { className } from "../../App/engine/utils";
    import { hash } from "../../App/engine/variables";
	import { isLoggedIn } from "../engine/variables";
    import Admin from "./Admin/Admin.svelte";
    import Apps from "./Apps/Apps.svelte";
    import Client from "./Client/Client.svelte";
	import Main from "./Main/Main.svelte";
    import Personalization from "./Personalization/Personalization.svelte";
    import Server from "./Server/Server.svelte";

</script>

<div class="adminpages {className(!$isLoggedIn, "hidden")}">
	<Main visible={"#" == $hash || "" == $hash} />
	<Apps visible={"#services" == $hash} />
	<Personalization visible={"#look" == $hash} />
	<Client visible={"#defaults" == $hash} />
	<Admin visible={"#admin" == $hash} />
	<Server visible={"#system" == $hash} />
</div>


<style>
	.adminpages {
		transition: all .4s .3s;
	}
	.adminpages.hidden {
		opacity: 0;
		pointer-events: none;
	}
	:global(.adminpages.hidden > div) {
		margin-top: 72px;
	}
	:global(.adminpages > div) {
		opacity: 0;
		visibility: hidden;
		height: 0;
		pointer-events: none;
		transition: all .3s;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: 960px;
		max-height: 100vh;
	}
	:global(.adminpages > div.visible) {
		opacity: 1;
		visibility: visible;
		height: 100%;
		pointer-events: all;
		overflow-y: scroll;
		transition: all .3s .3s;
	}
</style>
