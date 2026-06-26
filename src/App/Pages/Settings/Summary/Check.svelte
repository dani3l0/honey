<script>
	let { icon, color, name, value } = $props()

</script>


<div class="check">
	<div class="icon" style:--color={color}>
		<span class="material-symbols-outlined">{icon}</span>
	</div>
	<div class="text">
		<div class="name">{name}</div>
		<div class="note">{value}</div>
	</div>
</div>


<style>
	.check {
		display: flex;
		align-items: center;
		padding: 12px 0;
		max-width: 100%;
		width: 34%;
		min-width: 320px;
		flex: 1;
	}
	.icon {
		margin: 12px 14px 8px 16px;
		color: var(--color);
		text-shadow: 0 0 32px var(--color);
	}
	.icon span {
		font-size: 26px;
	}
	.text {
		flex: 1;
	}
	.text .note {
		opacity: .5;
		margin-top: 2px;
		font-size: 0.9rem;
	}
</style>
