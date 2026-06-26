<script>
    import { className } from "../../engine/utils";
    import { CONFIG } from "../../engine/variables";

	let { name, description, iconUrl, url } = $props()

</script>


<a class="app" href={url} target={className($CONFIG.client.open_in_new_tab, "_blank")}>
	<div class="icon">
		<img src={iconUrl} alt="appicon">
	</div>
	<div class="text">
		<div class="name">{name}</div>
		<div class="description">{description}</div>
	</div>
</a>


<style>
	.app {
		display: flex;
		align-items: center;
		flex: 1;
		min-width: 34%;
		position: relative;
		text-decoration: none;
		color: inherit;
		border-radius: 16px;
		transition: all var(--transition-duration);
	}
	.app:hover {
		background: #8884;
	}
	img {
		width: 54px;
		height: 54px;
		object-fit: cover;
		margin: 12px;
		border-radius: 4px;
	}
	.app .text {
		margin-left: 4px;
	}
	.app .name {
		font-size: 1.4rem;
	}
	.app .description {
		font-size: 0.9rem;
		opacity: .5;
	}
</style>
