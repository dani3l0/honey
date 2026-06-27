<script>
    import { getConfigs } from "../../engine/variables";

	let { to = "#", title, icon, color = 36*(icon.length + title.length), unsaved = $bindable(),
		onSave = () => {},
		onReset = () => {getConfigs(); unsaved = false},
		custom = "",
		onCustom = () => {}
	} = $props()
</script>


<div class="header" style:--hue={color}>
	<div class="icon">
		<span class="material-symbols-rounded">{icon}</span>
	</div>
	<div class="title">{title}</div>
	{#if custom.length}
		<button class="custom" onclick={onCustom}>
			<span class="material-symbols-rounded">{custom}</span>
		</button>
	{/if}
	{#if unsaved}
		<button class="reset" onclick={onReset}>
			<span class="material-symbols-rounded">reset_wrench</span>
		</button>
		<button class="save" onclick={onSave}>
			<span class="material-symbols-rounded">save</span>
		</button>
	{/if}
	<a class="back" href={to}>
		<span class="material-symbols-rounded">close</span>
	</a>
</div>


<style>
	.header {
		display: flex;
		align-items: center;
		background: #8883;
		padding: 6px;
		overflow: hidden;
		margin: 32px 12px;
		border-radius: 20px;
		position: sticky;
		backdrop-filter: blur(64px);
		top: 0;
		z-index: 10;
	}

	.icon {
		filter: hue-rotate(calc(var(--hue) * 1deg));
		display: flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		background: #FCC;
		color: #B00;
		border-radius: 16px;
	}

	.back, .save, .reset, .custom {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		border-radius: 16px;
		text-decoration: none;
		color: #F66;
		cursor: pointer;
		transition: all .2s;
	}
	.save {
		color: #4B2;
	}
	.reset {
		color: #D80;
	}
	.custom {
		color: #68F;
	}
	.back:hover {
		background: #F664;
	}
	.save:hover {
		background: #4B24;
	}
	.reset:hover {
		background: #D804;
	}
	.custom:hover {
		background: #68F4;
	}
	.title {
		font-size: 1.7rem;
		margin-left: 16px;
		flex: 1;
	}
</style>
