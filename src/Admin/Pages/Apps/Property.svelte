<script>
	let { icon, name, value = $bindable(""), detectChanges } = $props()

	const oninput = () => {
		detectChanges()
	}
</script>

<div class="property">
	<div class="icon">
		<span class="material-symbols-rounded">{icon}</span>
	</div>
	<div {oninput} data-placeholder={!value.length ? name : ""} class="value" contenteditable bind:textContent={value}></div>
</div>

<style>
	.property {
		display: flex;
		align-items: stretch;
		border: 1px solid #8886;
		overflow: hidden;
		border-radius: 20px;
		flex: 1;
		min-width: 240px;
		position: relative;
	}
	.value {
		padding: 12px 12px 12px 8px;
		white-space: nowrap;
		overflow-x: auto;
		flex: 1;
		transition: all .2s;
	}
	.value:focus {
		outline: none;
		background: #8883;
	}
	.value::before {
		content: attr(data-placeholder);
		color: #888B;
		pointer-events: none;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		padding-top: 1px;
		padding-left: 4px;
		margin-right: -8px;
		flex-shrink: 0;
	}
</style>
