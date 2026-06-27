<script>
	import { className, parseImgUrl } from "./engine/utils";
	import { CONFIG, hash } from "./engine/variables";
</script>


<div class="background">
	<img class="light {className($hash != "#", "zoomedIn")}" src={parseImgUrl($CONFIG.personalization.background_image, true)} alt="light background">
	<img class="dark {className($hash != "#", "zoomedIn")}" src={parseImgUrl($CONFIG.personalization.background_image_dark, true)} alt="dark background">
</div>


<style>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;
	}
	img {
		position: fixed;
		top: 50%;
		left: 50%;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		transform: translate(-50%, -50%);
		object-fit: cover;
		transition: transform calc(5 * var(--transition-duration)), opacity calc(3 * var(--transition-duration));
	}
	.zoomedIn {
		transform: translate(-50%, -50%) scale(1.2);
	}
	:global(main.dark .background img.light) {
		opacity: 0;
	}
	:global(main.dark .background img.dark) {
		opacity: 1;
	}
	:global(main:not(.dark) .background img.light) {
		opacity: 1;
	}
	:global(main:not(.dark) .background img.dark) {
		opacity: 0;
	}
</style>
