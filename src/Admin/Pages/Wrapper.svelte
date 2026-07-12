<script>
    import { className } from "../../App/engine/utils";
    import { hash, isLoggedIn } from "../engine/variables";

	let { targetHash, children, top = false } = $props()
</script>


<div class="page-wrapper {className($isLoggedIn && $hash == targetHash, "current")} {className(top, "top")}">
	{@render children?.()}
</div>


<style>
	.page-wrapper {
		position: fixed;
		width: 100vw;
		max-width: 1080px;
		height: 0;
		top: 48px;
		opacity: 0;
		left: 50%;
		overflow-x: hidden;
		overflow-y: scroll;
		transform: translateX(-50%);
		pointer-events: none;
		visibility: hidden;
		transition: all .4s;
	}
	.page-wrapper.top {
		top: -48px
	}
	.page-wrapper.current {
		top: 0;
		pointer-events: all;
		height: 100vh;
		opacity: 1;
		visibility: visible;
		transition: all .4s .3s;
	}
</style>
