<script>
    import { className } from "../../engine/utils";
    import { CONFIG, hash, isDev } from "../../engine/variables";
    import App from "./App.svelte";
    import Header from "./Header.svelte";

    const mkIconUrl = (url) => {
		if (!url.includes("/")) return isDev ? "http://127.0.0.1:4208/res/icons/"+url : "/res/icons/"+url
		return url
    }

</script>
<div class="services {className($hash != "#services", "hidden")}">
	<Header />
	<div class="apps">
		{#each $CONFIG.dashboard_items as item}
			<App
				name={item.name}
				description={item.description}
				iconUrl={mkIconUrl(item.icon_url)}
				url={item.url}
			/>
		{/each}
	</div>
</div>


<style>
	.services {
		position: fixed;
		width: calc(100% - 20px);
		max-width: 960px;
		top: 16px;
		max-height: calc(100% - 32px);
		box-shadow: 8px 8px 24px #0004;
		background: #FFFB;
		backdrop-filter: blur(32px);
		transform: translateX(-50%);
		left: 50%;
		padding: 6px;
		overflow: hidden;
		border-radius: 20px;
		z-index: 2;
		transition: all calc(1.5 * var(--transition-duration)) calc(var(--transition-duration) / 2);
	}
	.services.hidden {
		top: 80px;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition: all calc(1.5 * var(--transition-duration));
	}

	.apps {
		display: flex;
		align-items: stretch;
		gap: 6px;
		padding: 6px;
		flex-wrap: wrap;
		overflow-y: scroll;
		max-height: calc(100vh - 128px);
	}

	:global(.noblur > .services) {
		background: #FFF;
	}
	:global(.dark > .services) {
		background: #000B;
	}
	:global(.dark.noblur > .services) {
		background: #000;
	}
</style>
