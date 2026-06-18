<script>
	let { name, description, iconUrl, url } = $props()

</script>


<a class="app" href={url}>
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
	}
	.app::after {
		content: " ";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 16px;
		background: #0000;
		transform: scale(0.95);
		z-index: -1;
		transition: all .2s;
	}
	.app:hover::after {
		background: #8884;
		transform: none;
	}
	img {
		width: 64px;
		height: 64px;
		object-fit: cover;
		margin: 12px;
		border-radius: 4px;
	}
	.app .text {
		margin-left: 4px;
	}
	.app .name {
		font-size: 1.5rem;
	}
	.app .description {
		font-size: 0.9rem;
		opacity: .5;
	}
</style>
