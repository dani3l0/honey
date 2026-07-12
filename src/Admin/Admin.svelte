<script>
    import { configMain, configSystem } from "./engine/variables";
    import Login from "./Login/Login.svelte";
    import Pages from "./Pages/Pages.svelte";

</script>

<Login />

{#if Object.keys($configMain).length && Object.keys($configSystem).length}
	<Pages />
{/if}
