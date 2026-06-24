<script>
	let { icon, color, name, desc, url } = $props()

</script>


<a class="link" href={url} style:--color={color} target="_blank">
	<div class="icon">
		<span class="material-symbols-rounded">{icon}</span>
	</div>
	<div class="text">
		<div class="name">{name}</div>
		<div class="desc">{desc}</div>
	</div>
</a>


<style>
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		width: 100%;
		min-width: 320px;
		flex: 1;
		padding: 16px 14px;
		margin: 0 4px;
		position: relative;
		border-radius: 16px;
		transition: all .2s;
	}
	a:hover {
		background: #8884;
	}
	span {
		font-size: 26px;
		color: var(--color);
		margin: 4px 12px 0 4px;
		text-shadow: 0 0 32px var(--color);
	}
	.text .name {
		font-size: 1.1rem;
		margin-bottom: 2px;
	}
	.text .desc {
		font-size: 0.9rem;
		opacity: .5;
	}
</style>
