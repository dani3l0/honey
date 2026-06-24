<script>
	const emptyFunc = () => {}
	let { icon, name, to, onclick = emptyFunc } = $props()

</script>

<a class="option" href={to} {onclick}>
	<span class="material-symbols-rounded">{icon}</span>
	<div class="name">{name}</div>
</a>


<style>
	@import 'material-symbols';

	.option {
		flex: 1;
		width: 100%;
		padding: 12px;
		position: relative;
		cursor: pointer;
		overflow: hidden;
		text-decoration: none;
		border-radius: 16px;
		color: inherit;
		align-items: center;
		transition: all var(--transition-duration);
	}
	.option:hover {
		background: #8884;
	}
	.material-symbols-rounded {
		font-size: 28px;
	}
</style>
