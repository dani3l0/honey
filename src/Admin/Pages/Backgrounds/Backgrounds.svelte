<script>
	import Header from "../../components/Header.svelte";
	import { backgroundsList } from "../../engine/variables";

	const maxWalls = 18
	let search = $state("")
	let walls = $derived($backgroundsList.filter(wall => wall.includes(search)))
	let andmore = $derived((walls.length - maxWalls) > 0 ? `... and ${walls.length - maxWalls} more` : "")

</script>


<div>
	<Header icon="wallpaper" title="Backgrounds" color={0} />

	<div class="search">
		<input class="searchField" placeholder="Search..." bind:value={search}>
	</div>

	<div class="walls">
		{#each walls.slice(0, maxWalls) as wall}
			<div class="wall">
				<img src="/res/backgrounds/{wall}" alt={wall}>
				<div class="name">{wall}</div>
			</div>
		{/each}
	</div>

	<div class="andmore">{andmore}</div>
</div>


<style>
	.search {
		padding: 20px 12px 24px;
		position: sticky;
		top: 64px;
		background: linear-gradient(0deg, #0000, #FFF 20%);
		z-index: 10;
	}
	.walls {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 8px;
		padding: 8px;
		margin-bottom: 40px;
	}
	.wall {
		display: flex;
		flex: 1;
		min-width: 320px;
		max-width: 480px;
		flex-direction: column;
		text-align: center;
		background: #8882;
		border-radius: 20px;
		overflow: hidden;
		position: relative;
	}
	img {
		width: 100%;
		height: 192px;
		object-fit: cover;
	}
	.name {
		font-size: 0.9rem;
		font-family: monospace;
		opacity: .6;
		user-select: all;
		padding: 10px;
		cursor: pointer;
	}
	.andmore {
		text-align: center;
		opacity: .5;
		margin-bottom: 48px;
	}
</style>
