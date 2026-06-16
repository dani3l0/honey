<script>
	let { icon, name, to } = $props()

</script>

<a class="option" href={to}>
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
		color: inherit;
		align-items: center;
	}
	.option::after {
		content: " ";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 16px;
		background: #0000;
		transform: scale(.9);
		transition: all .2s;
	}
	.option:hover::after {
		background: #8884;
		transform: scale(1);
	}
	.material-symbols-rounded {
		font-size: 28px;
	}
</style>
