<script>
    import { className } from "../../engine/utils";
    import { hash } from "../../engine/variables";
    import App from "./App.svelte";
    import Header from "./Header.svelte";

</script>
<div class="services {className($hash != "#services", "hidden")}">
	<Header />
	<div class="apps">
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
		<App name="honey" description="miodzio miodzio" iconUrl="http://127.0.0.1:4208/res/icons/honey.png" url="#" />
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
		border-radius: 20px;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
		z-index: 2;
		transition: all .3s .1s;
	}
	.services.hidden {
		top: 80px;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition: all .3s;
	}

	.apps {
		display: flex;
		align-items: stretch;
		gap: 6px;
		padding: 6px;
		flex-wrap: wrap;
		overflow-y: scroll;
		scrollbar-width: none;
		max-height: calc(100vh - 128px);
	}
	::-webkit-scrollbar {
		display: none;
	}
</style>
