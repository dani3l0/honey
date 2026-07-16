<script>
    import { tick } from "svelte";
    import { parseImgUrl } from "../../../App/engine/utils";
	import Header from "../../components/Header.svelte";
    import { configMain } from "../../engine/variables";

	let div = $state(null)

	const moveItem = (index, direction) => {
		let targetIndex = index + direction
		if (targetIndex < 0 || targetIndex >= $configMain.dashboard_items.length) return
		let items = [...$configMain.dashboard_items]
		let [movedItem] = items.splice(index, 1)
		items.splice(index + direction, 0, movedItem)
		$configMain.dashboard_items = items
	}

	const deleteItem = (index) => {
		$configMain.dashboard_items = $configMain.dashboard_items.filter((_, i) => i !== index)
	}

	const newService = async () => {
		$configMain.dashboard_items = [...$configMain.dashboard_items, {
			name: "New service",
			description: "With no description",
			url: "about:blank",
			icon_url: "/honey.png"
		}]
		await tick()
		console.log(div.parentNode.scrollHeight)
		div.parentNode.scrollTo({
			top: div.parentNode.scrollHeight,
			behavior: "smooth"
		})
	}
</script>


<div bind:this={div}>
	<Header icon="apps" title="Services" color={100} />
	
	<div class="top-actions">
		<button onclick={newService}>Add new service</button>
	</div>

	<div class="services">
		{#each $configMain.dashboard_items as service, i}

			<div class="service">

				<div class="info">
					<div class="icon">
						<div class=""></div>
						<img src={parseImgUrl(service.icon_url)} alt="{service.name} icon">
					</div>
					<div class="text">
						<div class="name">
							<span class="material-symbols-rounded">tag</span>
							<input bind:value={$configMain.dashboard_items[i].name}>
						</div>
						<div class="description">
							<span class="material-symbols-rounded">short_text</span>
							<input bind:value={$configMain.dashboard_items[i].description} placeholder="No description">
						</div>
						<div class="image">
							<span class="material-symbols-rounded">image</span>
							<input bind:value={$configMain.dashboard_items[i].icon_url}>
						</div>
						<div class="url">
							<span class="material-symbols-rounded">link</span>
							<input bind:value={$configMain.dashboard_items[i].url}>
						</div>
					</div>
				</div>

				<div class="actions">
					<button class="material-symbols-rounded" title="Move up" onclick={() => moveItem(i, -1)}>arrow_upward</button>
					<button class="material-symbols-rounded" title="Move down" onclick={() => moveItem(i, 1)}>arrow_downward</button>
					<button class="material-symbols-rounded" title="Delete" onclick={() => deleteItem(i)}>delete</button>
				</div>

			</div>

		{/each}
	</div>

</div>


<style>
	.services {
		display: flex;
		align-items: stretch;
		justify-content: center;
		gap: 8px;
		margin: 8px;
		flex-wrap: wrap;
	}

	.service {
		flex: 1;
		min-width: 360px;
		max-width: 440px;
		background: #8882;
		border-radius: 20px;
		overflow: hidden;
		padding: 8px;
	}

	.info {
		display: flex;
		align-items: flex-start;
	}

	.info .icon {
		position: relative;
		width: 64px;
		height: 64px;
		margin: 4px;
		overflow: hidden;
	}
	.info .icon img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.info .text {
		flex: 1;
	}
	.info .text > div {
		display: flex;
		align-items: center;
	}
	.info .text span {
		font-size: 20px;
		opacity: .5;
		padding: 0 6px 0 8px;
	}
	.info .text input {
		background: none;
		padding: 4px 0;
		margin: 0;
		border-radius: 0;
	}
	.info .name input {
		font-size: 1.25rem;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 4px;
		margin-top: 8px;
	}
	.actions button {
		background: #8882;
		text-align: center;
		padding: 8px 0;
		border-radius: 20px;
		display: block;
		transition: all .2s;
	}
	.actions button:hover {
		background: #8884;
	}

	.top-actions {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 8px 24px;
	}
	.top-actions button {
		text-align: center;
		border-radius: 24px;
		color: #238;
		background: #68F3;
		padding: 12px;
	}
</style>
