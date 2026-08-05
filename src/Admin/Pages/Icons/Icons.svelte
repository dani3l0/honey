<script>
	import Header from "../../components/Header.svelte";
	import { iconsList } from "../../engine/variables";

	const maxIcons = 100
	let search = $state("")
	let icons = $derived($iconsList.filter(icon => icon.includes(search)))
	let andmore = $derived((icons.length - maxIcons) > 0 ? `... and ${icons.length - maxIcons} more` : "")

</script>


<div>
	<Header icon="deceased" title="Icons" color={30} />

	<div class="search">
		<input class="searchField" placeholder="Search..." bind:value={search}>
	</div>

	<div class="icons">
		{#each icons.slice(0, maxIcons) as icon}
			<div class="icon">
				<img src="/res/icons/{icon}" alt={icon}>
				<div class="name">{icon}</div>
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
	.icons {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 8px;
		padding: 8px;
		margin-bottom: 40px;
	}
	.icon {
		display: flex;
		flex: 1;
		min-width: 144px;
		max-width: 240px;
		flex-direction: column;
		text-align: center;
		background: #8882;
		border-radius: 20px;
		padding: 12px 10px;
		overflow: hidden;
	}
	img {
		width: 64px;
		height: 64px;
		margin: 2px auto 8px;
	}
	.name {
		font-size: 0.9rem;
		font-family: monospace;
		opacity: .6;
		user-select: all;
		cursor: pointer;
	}
	.andmore {
		text-align: center;
		opacity: .5;
		margin-bottom: 48px;
	}
</style>
