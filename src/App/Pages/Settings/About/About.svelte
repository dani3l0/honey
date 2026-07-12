<script>
    import { className, parseImgUrl } from "../../../engine/utils";
    import { hash } from "../../../engine/variables";
    import AboutComponent from "./AboutComponent.svelte";
    import Link from "./Link.svelte";

    let { height = $bindable() } = $props()
</script>


<div class="about {className($hash != "#about", "hidden")}" bind:clientHeight={height}>
	<AboutComponent />
</div>


<style>
	.about {
		flex: 1;
		width: 100%;
		transition: all calc(1.5 * var(--transition-duration));
	}
	.about.hidden {
		pointer-events: none;
	}
</style>
