<script>
    import { className } from "../../engine/utils";
    import { CONFIG, hash, isDark, isDev } from "../../engine/variables";
    import Option from "./Option.svelte";

</script>


<div class="main {className($hash != "#", "hidden")}">
	<div class="branding">
		<img src={isDev ? "http://127.0.0.1:4208/res/icons/honey.png" : "/res/icons/honey.png"} alt="logo">
		<div class="title">honey</div>
		<div class="subtitle">A sweet place for all your self-hosted services.</div>
	</div>
	<div class="options">
		<div class="home">
			<Option icon="colors" name="Theme" to="#" onclick={() => $CONFIG.client.dark_mode = isDark() ? "light" : "dark"} />
			<Option icon="apps" name="Services" to="#services" />
			<Option icon="more" name="More" to="#summary" />
		</div>
	</div>
</div>


<style>
	.main {
		text-align: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 1;
		transition: all .3s .1s;
	}
	.main.hidden {
		top: -64px;
		pointer-events: none;
		transition: all .3s;
	}
	.main.hidden .branding, .main.hidden .options {
		opacity: 0;
		transition: all .3s;
	}

	.branding {
		transition: all .3s .1s;
	}
	.branding img {
		width: 240px;
		height: 240px;
		object-fit: cover;
	}
	.branding .title {
		font-size: 3.25rem;
	}
	.branding .subtitle {
		font-size: 1.1rem;
		opacity: .6;
	}

	.options {
		background: #FFFB;
		backdrop-filter: blur(32px);
		border-radius: 20px;
		width: calc(100% - 12px);
		max-width: 540px;
		box-shadow: 8px 8px 24px #0004;
		margin: 20px auto;
		transition: all .3s .1s;
	}
	.home {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		margin: 4px;
	}

	:global(.noblur > .main > .options) {
		background: #FFF;
	}
	:global(.dark > .main > .options) {
		background: #000B;
	}
	:global(.dark.noblur > .main > .options) {
		background: #000;
	}
</style>
