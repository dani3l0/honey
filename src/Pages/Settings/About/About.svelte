<script>
    import { className } from "../../../engine/utils";
    import { hash, isDev } from "../../../engine/variables";

    let { height = $bindable() } = $props()
</script>


<div class="about {className($hash != "#about", "hidden")}" bind:clientHeight={height}>
	<div class="branding">
		<img src={isDev ? "http://127.0.0.1:4208/res/icons/honey.png" : "/res/icons/honey.png"} alt="logo">
		<div class="title">honey</div>
		<div class="subtitle">A sweet place for all your self-hosted services.</div>
	</div>
</div>


<style>
	.about {
		flex: 1;
		width: 100%;
		transition: all .3s;
	}
	.about.hidden {
		opacity: 0;
		pointer-events: none;
	}

	.branding {
		text-align: center;
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
	}
</style>
