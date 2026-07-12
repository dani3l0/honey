<script>
	let { title, subtitle } = $props()
</script>


<div class="title">{title}</div>
<div class="subtitle">{subtitle}</div>


<style>
	.title {
		text-align: center;
		font-size: 4rem;
	}
	.subtitle {
		letter-spacing: 4px;
		opacity: .5;
		text-align: center;
		margin-bottom: 64px;
	}
</style>
