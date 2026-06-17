<script>
    import { className } from "../../../engine/utils";
    import { hash } from "../../../engine/variables";

    let { height = $bindable() } = $props()

</script>


<div class="user-settings {className($hash != "#settings", "hidden")}" bind:clientHeight={height}>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
	<div>blahblach</div>
</div>


<style>
	.user-settings {
		flex: 1;
		width: 100%;
		transition: all .3s;
	}
	.user-settings.hidden {
		opacity: 0;
		pointer-events: none;
	}
</style>
