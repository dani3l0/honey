<script>
    import { className } from "../../../App/engine/utils";
	import Option from "./Option.svelte";

	let { visible } = $props()

</script>
<div class="{className(visible, "visible")}">
	<div class="honey-big">honey</div>
	<div class="honey-small">Configuration Page</div>
	<Option to="#services" icon="apps" color={240} name="Services" description="Add, remove and reorder available items in Services tab" />
	<Option to="#look" icon="brush" color={320} name="Personalization" description="Customize honey's look and make it yours!" />
	<Option to="#defaults" icon="display_settings" color={90} name="Client" description="Define default frontend settings for clients" />
	<Option to="#admin" icon="password" color={25} name="Admin" description="Manage Configuration Page credentials" />
	<Option to="#system" icon="dns" color={160} name="Server" description="Settings related to honey's backend" />
</div>

<style>
	.honey-big {
		font-size: 4rem;
		text-align: center;
		margin-top: 108px;
	}
	.honey-small {
		letter-spacing: 4px;
		opacity: .5;
		text-align: center;
		margin-bottom: 64px;
	}
</style>
