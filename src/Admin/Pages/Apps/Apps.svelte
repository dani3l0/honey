<script>
	import { fromStore } from "svelte/store";
	import { className, parseImgUrl } from "../../../App/engine/utils";
	import { configMain } from "../../engine/variables";
	import Header from "../components/Header.svelte";
	import Property from "./Property.svelte";

	let { visible } = $props()
	let config = fromStore(configMain)
	let parent = $state(null)

	let items = $state([])
	let draggedIndex = null

	let unsaved = $state(false)

	$effect(() => {
		if (config.current?.dashboard_items) {
			items = config.current.dashboard_items;
		}
	});

	function handleOver(e, index) {
		e.preventDefault();
		if (draggedIndex === null || draggedIndex === index) return;

		let updated = [...items];
		const [moved] = updated.splice(draggedIndex, 1);
		updated.splice(index, 0, moved);

		draggedIndex = index;
		items = updated;
	}
	function detectChanges() {
		draggedIndex = null
		let cleanItems = $state.snapshot(items)
		let newConf = { ...config.current, dashboard_items: cleanItems }
		unsaved = JSON.stringify(config.current) != JSON.stringify(newConf)
		return newConf
	}
	function addItem() {
		items.push({
			name: "New Service",
			icon_url: "",
			url: "",
			description: ""
		})
		detectChanges()
		if (parent.scrollTo) setTimeout(() => parent.scrollTo({ top: parent.scrollHeight, behavior: 'smooth' }), 0)
	}
	function removeItem(index) {
		items.splice(index, 1)
		detectChanges()
	}

	async function saveConf() {
		let cleanItems = $state.snapshot(items)
		let newConf = { ...config.current, dashboard_items: cleanItems }
		let result = await fetch("/api/admin/setConfig", {
			method: "POST",
			body: JSON.stringify(newConf),
			credentials: "include"
		})
		if (result.ok) {
			unsaved = false
			configMain.set((await result.json()).data)
		}
	}

</script>

<div class={className(visible, "visible")} bind:this={parent}>
	<Header icon="apps" title="Services" color={240}
		bind:unsaved onSave={saveConf}
		custom="add" onCustom={addItem}
	/>
	<div class="items">
		{#each items as item, i (i)}
			<div class="item" draggable="true" role="none"
				ondragstart={() => draggedIndex = i}
				ondragover={(e) => handleOver(e, i)}
				ondragend={detectChanges}
			>
				<div class="icon">
					<img src={parseImgUrl(item.icon_url)} alt="appicon">
					<button onclick={() => removeItem(i)}>Remove</button>
				</div>
				<div class="text">
					<Property icon="tag" name="Name" bind:value={item.name} {detectChanges} title />
					<Property icon="photo" name="Icon URL" bind:value={item.icon_url} {detectChanges} />
					<Property icon="link" name="Service URL" bind:value={item.url} {detectChanges} />
					<Property icon="description" name="Description" bind:value={item.description} {detectChanges} />
				</div>
			</div>
		{/each}
	</div>
</div>


<style>
	.items {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
	}
	.item {
		display: flex;
		align-items: center;
		padding: 16px;
		background: #EEE;
		border-radius: 24px;
		overflow-x: auto;
		margin: 4px;
		width: 34%;
		flex: 1;
		min-width: 320px;
	}
	.icon {
		margin: 0 8px 0 4px;
	}
	.icon img {
		min-width: 64px;
		max-width: 64px;
		min-height: 64px;
		max-height: 64px;
		object-fit: cover;
	}
	.text {
		flex: 1;
	}
	.icon button {
		color: #B44;
		font-size: 0.8rem;
		text-align: center;
		background: #B443;
		border-radius: 20px;
		padding: 4px 6px;
	}
</style>
