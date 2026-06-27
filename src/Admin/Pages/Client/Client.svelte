<script>
    import { className } from "../../../App/engine/utils";
    import Header from "../components/Header.svelte";

	let { visible } = $props()
</script>

<div class="{className(visible, "visible")}">
	<Header icon="display_settings" title="Client" color={90} />
</div>
