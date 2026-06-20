<script>
    import { className } from "../../../engine/utils";

	let { icon, name, desc, value = $bindable(true) } = $props()

</script>


<button class="switch" onclick={() => value = !value}>
	<div class="icon">
		<span class="material-symbols-rounded">{icon}</span>
	</div>
	<div class="text">
		<div class="name">{name}</div>
		<div class="description">{desc}</div>
	</div>
	<div class="value {className(value, "checked")}"></div>
</button>


<style>
	.switch {
		display: flex;
		align-items: center;
		padding: 16px;
		background: #8883;
		border-radius: 12px;
		margin: 8px;
		cursor: pointer;
	}
	.icon span {
		margin: 6px 16px 0 8px;
		font-size: 26px;
	}
	.text {
		flex: 1;
	}
	.text .name {
		font-size: 1.15rem;
	}
	.text .description {
		font-size: 0.9rem;
		opacity: .5;
	}
	.value {
		background: #6662;
		height: 24px;
		width: 44px;
		position: relative;
		border-radius: 32px;
		border: 2px solid #6664;
		transition: all .2s;
	}
	.value.checked {
		border-color: #68FB;
		background: #68F4;
	}
	.value::after {
		content: " ";
		position: absolute;
		width: 20px;
		height: 20px;
		background: #888C;
		top: 0;
		left: 0;
		margin: 2px;
		border-radius: 20px;
		transition: all .2s;
	}

	.value.checked::after {
		left: calc(100% - 24px);
		background: #68F;
	}
</style>
