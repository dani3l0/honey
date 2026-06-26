<script>
	import Option from "./Option.svelte";

</script>
<div class="main">
	<div class="honey-big">honey</div>
	<div class="honey-small">Configuration Page</div>
	<Option icon="apps" name="Services" description="Add, remove and reorder available items in Services tab" />
	<Option icon="brush" name="Personalization" description="Customize honey's look and make it yours!" />
	<Option icon="display_settings" name="Client" description="Define default frontend settings for clients" />
	<Option icon="password" name="Admin" description="Manage Configuration Page credentials" />
	<Option icon="dns" name="Server" description="Settings related to honey's backend" />
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
