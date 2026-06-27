<script>
    import { className, parseImgUrl } from "../../../engine/utils";
    import { CONFIG, hash } from "../../../engine/variables";
    import Link from "./Link.svelte";

    let { height = $bindable() } = $props()
</script>


<div class="about {className($hash != "#about", "hidden")}" bind:clientHeight={height}>
	<div class="branding">
		<img src={parseImgUrl($CONFIG.personalization.favicon)} alt="logo">
		<div class="title">honey</div>
		<div class="subtitle">A sweet place for all your self-hosted services.</div>
	</div>
	<div class="links">
		<Link icon="code_xml" color="#68F" name="Source code" desc="See the project from inside." url="https://github.com/dani3l0/honey" />
		<Link icon="bug_report" color="#F66" name="Report bug" desc="If something doesn't work, or request a new feature..." url="https://github.com/dani3l0/honey/issues" />
	</div>
</div>


<style>
	.about {
		flex: 1;
		width: 100%;
		transition: all calc(1.5 * var(--transition-duration));
	}
	.about.hidden {
		pointer-events: none;
	}

	.branding {
		text-align: center;
		transition: all calc(1.5 * var(--transition-duration)) CALC(var(--transition-duration) / 2);
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
		opacity: .5;
		margin-bottom: 32px;
	}
	.links {
		display: flex;
		align-items: stretch;
		flex-wrap: wrap;
		margin: 0 auto;
	}
</style>
