<script>
    import { className } from "./engine/utils";
    import { hash, isDev } from "./engine/variables";

</script>


<div class="background">
	<img class="light {className($hash != "#", "zoomedIn")}" src={isDev ? "http://127.0.0.1:4208/res/backgrounds/LivingRoom-Light.png" : "/res/backgrounds/LivingRoom-Light.png"} alt="light background">
	<img class="dark {className($hash != "#", "zoomedIn")}" src={isDev ? "http://127.0.0.1:4208/res/backgrounds/LivingRoom-Dark.png" : "/res/backgrounds/LivingRoom-Dark.png"} alt="dark background">
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
		width: 100%;
		height: 100%;
		transform: translate(-50%, -50%);
		object-fit: cover;
		transition: transform 1s, opacity .6s;
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
