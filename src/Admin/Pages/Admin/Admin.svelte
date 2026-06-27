<script>
    import { className } from "../../../App/engine/utils";
    import Header from "../components/Header.svelte";

	let { visible } = $props()
</script>

<div class="{className(visible, "visible")}">
	<Header icon="password" title="Admin" color={25} />
</div>
