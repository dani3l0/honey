<script>
    import { isDev } from "./engine/variables";

</script>


<div class="background">
	<img src={isDev ? "http://127.0.0.1:4208/res/backgrounds/LivingRoom-Dark.png" : "/res/backgrounds/LivingRoom-Light.png"} alt="background">
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
	}
</style>
