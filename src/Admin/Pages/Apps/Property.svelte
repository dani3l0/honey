<script>
    import { className } from "../../../App/engine/utils";

	let { icon, name, value = $bindable(""), detectChanges, title = false } = $props()

	const oninput = () => {
		detectChanges()
	}
</script>

<div class="property {className(title, "title")}">
	<div class="icon">
		<span class="material-symbols-rounded">{icon}</span>
	</div>
	<div {oninput} data-placeholder={!value.length ? name : ""} class="value" contenteditable bind:textContent={value}></div>
</div>

<style>
	.property {
		display: flex;
		align-items: stretch;
		overflow: hidden;
		border-radius: 20px;
		flex: 1;
		min-width: 240px;
		font-size: 0.85rem;
		color: #666;
		position: relative;
	}
	.property.title {
		color: inherit;
		font-size: 1.5rem;
	}
	.value {
		padding: 6px 8px;
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
	.icon span {
		font-size: 22px;
		color: #888;
	}
</style>
