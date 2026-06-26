<script>
    import CloseButton from "../../components/CloseButton.svelte";
    import { hash } from "../../engine/variables";

    let { titles, hashes, position } = $props()
</script>


<div class="header">
	<div class="switch">
		<div class="switches">
			{#each titles as title}
				<a href={hashes[titles.indexOf(title)]}>{title}</a>
			{/each}
		</div>
		<div class="highlighter" style:--position={position} style:--items={titles.length}></div>
	</div>
	<div class="closebtn">
		<CloseButton />
	</div>
</div>


<style>
	.header {
		display: flex;
		align-items: center;
		margin-bottom: 24px;
	}
	.switch {
		flex: 1;
		border-radius: 100px;
		text-align: center;
		margin: 8px 4px 8px 6px;
		position: relative;
		background: #8883;
		overflow: hidden;
	}
	.switches {
		display: flex;
		gap: 4px;
		align-items: center;
	}
	.switches a {
		padding: 14px 12px;
		flex: 1;
		cursor: pointer;
		z-index: 1;
		color: inherit;
		text-decoration: none;
	}
	.highlighter {
		position: absolute;
		border-radius: 100px;
		background: #8884;
		top: 50%;
		height: calc(100% - 8px);
		width: calc(100% / var(--items) - 8px);
		left: calc(4px + 100% / (var(--items)) * var(--position));
		transform: translate(0, -50%);
		transition: all calc(1.5 * var(--transition-duration));
	}
</style>
