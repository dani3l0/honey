<script>
    import { className } from "../../App/engine/utils";
    import { isLoggedIn } from "../engine/variables";
    import Main from "./Main/Main.svelte";

</script>

<div class="adminpages {className(!$isLoggedIn, "hidden")}">
	<Main />
</div>


<style>
	.adminpages {
		margin: 0 12px;
		transition: all .4s;
	}
	.adminpages.hidden {
		transform: scale(.9);
		opacity: 0;
		pointer-events: none;
	}
</style>
