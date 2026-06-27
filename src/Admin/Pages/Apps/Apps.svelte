<script>
	import { fromStore } from "svelte/store";
	import { className, parseImgUrl } from "../../../App/engine/utils";
	import { configMain } from "../../engine/variables";
	import Header from "../components/Header.svelte";
	import Property from "./Property.svelte";

	let { visible } = $props()
	let config = fromStore(configMain)

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

<div class={className(visible, "visible")}>
	<Header icon="apps" title="Services" color={240} bind:unsaved onSave={saveConf} />
	<div class="items">
		{#each items as item, i (i)}
			<div class="item" draggable="true" role="none"
				ondragstart={() => draggedIndex = i}
				ondragover={(e) => handleOver(e, i)}
				ondragend={detectChanges}
			>
				<div class="icon">
					<img src={parseImgUrl(item.icon_url)} alt="appicon">
				</div>
				<div class="text">
					<Property icon="tag" name="Name" bind:value={item.name} {detectChanges} />
					<Property icon="photo" name="Icon URL" bind:value={item.icon_url} {detectChanges} />
					<Property icon="link" name="Service URL" bind:value={item.url} {detectChanges} />
					<Property icon="description" name="Description" bind:value={item.description} {detectChanges} />
				</div>
			</div>
		{/each}
	</div>
</div>


<style>
	.item {
		display: flex;
		align-items: center;
		padding: 16px;
		background: #EEE;
		border-radius: 24px;
		margin: 12px 0;
	}
	.icon {
		margin-right: 16px;
	}
	.icon img {
		min-width: 96px;
		max-width: 96px;
		min-height: 96px;
		max-height: 96px;
		object-fit: cover;
	}
	.text {
		flex: 1;
		display: flex;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
