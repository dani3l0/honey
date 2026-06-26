<script>
    import { className } from "../../../App/engine/utils";

	let { visible } = $props()
</script>

<div class="{className(visible, "visible")}">
	APPPS TEST
	<a href="#">main</a>
</div>
