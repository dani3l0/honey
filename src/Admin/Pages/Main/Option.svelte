<script>
	let { icon, name, description } = $props()
</script>

<div class="main-option" style:--hue={(icon.length + name.length + description.length) % 10}>
	<div class="icon">
		<span class="material-symbols-rounded">{icon}</span>
	</div>
	<div class="text">
		<div class="name">{name}</div>
		<div class="description">{description}</div>
	</div>
	<div class="next">
		<span class="material-symbols-rounded">chevron_right</span>
	</div>
</div>

<style>
	.main-option {
		background: #8882;
		margin: 8px auto;
		max-width: 800px;
		border-radius: 20px;
		overflow: hidden;
		display: flex;
		align-items: center;
		padding: 12px;
		cursor: pointer;
		transition: all .2s;
	}
	.main-option:hover {
		background: #8884;
	}
	.text {
		flex: 1;
	}
	.icon {
		margin: 0 12px 0 0;
		background: #FCC;
		color: #B00;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 64px;
		width: 64px;
		border-radius: 12px;
		filter: hue-rotate(calc(var(--hue) * 36deg));
	}
	.icon span {
		margin-top: 2px;
		font-size: 24px;
	}
	.next {
		margin-top: 4px;
		transform: translateX(-8px);
		opacity: 0;
		transition: all .2s;
	}
	.main-option:hover .next {
		opacity: 1;
		transform: none;
	}
</style>
