<script>
	let { icon, name, desc, values, valWidth = 128, value = $bindable(Object.keys(values)[0]) } = $props()
</script>


<div class="multi-switch">
	<div class="icon">
		<span class="material-symbols-rounded">{icon}</span>
	</div>
	<div class="text">
		<div class="name">{name}</div>
		<div class="description">{desc}</div>
	</div>
	<div class="wrapper"
		style:--width="{valWidth}px"
		style:--elements={Object.keys(values).length}
		style:--value={Object.keys(values).indexOf(value)}
	>
		<div class="handle"></div>
		<div class="values">
			{#each Object.keys(values) as val}
				<button
					style:--color={value == val ? "#48F" : "inherit"}
					onclick={() => value = val}
				>{values[val]}</button>
			{/each}
		</div>
	</div>
</div>


<style>
	.multi-switch {
		display: flex;
		align-items: center;
		padding: 16px;
		background: #8883;
		border-radius: 12px;
		margin: 8px;
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
	.wrapper {
		position: relative;
		background: #6662;
		border: 2px solid #6664;
		border-radius: 32px;
		display: flex;
		height: 40px;
		align-items: center;
	}
	.values {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		color: #333;
		transition: all .2s;
	}
	:global(.dark .user-settings .multi-switch .values) {
		color: #CCC;
	}
	.values button {
		flex: 1;
		padding: 8px 16px;
		color: var(--color);
		transition: all .2s;
	}
	.handle {
		position: absolute;
		top: 0;
		left: calc(100% / var(--elements) * var(--value));
		border-radius: 100px;
		margin: 2px;
		width: calc(100% / var(--elements) - 4px);
		height: calc(100% - 4px);
		z-index: -1;
		background: #68F3;
		transition: all .2s;
	}
</style>
