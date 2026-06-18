<script>
	let { icon, name, desc, values, valWidth = 128, value = $bindable(Object.keys(values)[0]) } = $props()

	// @ts-ignore
	const change = (amount) => {
		let keys = Object.keys(values)
		let test = keys.indexOf(value)
		test += amount
		if (test < 0) test = keys.length - 1
		if (test >= keys.length) test = 0
		value = keys[test]
	}
</script>


<div class="list-switch">
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
		<button style:left={0} onclick={() => change(-1)}>-</button>
		<div class="values">
			{#each Object.keys(values) as val}
				<div style:--visible={Number(val == value)}>{values[val]}</div>
			{/each}
		</div>
		<button style:right={0} onclick={() => change(1)}>+</button>
	</div>
</div>


<style>
	.list-switch {
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
		background: #8883;
		border: 2px solid #8888;
		border-radius: 32px;
		display: flex;
		padding: 8px 0;
		height: 20px;
		overflow: hidden;
		align-items: center;
	}
	.values {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		flex-direction: column;
		transform: translateY(calc(-12px + 50% + -100% * var(--value) / var(--elements)));
		transition: all .2s;
	}
	.values div {
		flex: 1;
		margin: 2px 48px;
		opacity: var(--visible);
		transition: all .2s;
	}
	button {
		position: absolute;
		width: fit-content;
		padding: 12px;
		background: #8883;
		z-index: 1;
	}
</style>
