<script>
	let { icon, name, description, target, color = name.length*24 } = $props()
</script>


<a class="item" href={target} aria-label={name} style:--color="{color}deg">
	<div class="icon">
		<span class="material-symbols-rounded">{icon}</span>
	</div>
	<div class="name">{name}</div>
	<div class="description">{description}</div>
</a>


<style>
	.item {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		filter: hue-rotate(var(--color));
		background: #EEE;
		border-radius: 20px;
		padding: 16px;
		cursor: pointer;
		max-width: 320px;
		min-width: 240px;
		flex: 1;
		text-decoration: none;
		color: inherit;
		transition: all .3s;
	}
	.item:hover {
		background: #DDD;
	}
	.icon {
		padding: 24px;
		border-radius: 64px;
		color: #D00;
		background: #FCC;
		display: inline-flex;
		align-items: center;
		margin-bottom: 10px;
	}
	.icon span {
		font-size: 32px;
	}
	.name {
		font-size: 1.35rem;
		margin-bottom: 2px;
	}
	.description {
		font-size: 0.9rem;
		opacity: .5;
	}
</style>
