<script>
	import { className } from "../../App/engine/utils";
	import { isLoggedIn } from "../engine/variables";

	const submit = async () => {
		isLoggedIn.set(true)
	}
</script>

<div class="login {className($isLoggedIn, "hidden")}">
	<div class="log-in">Log in</div>
	<div class="conf">Configuration Page</div>
	<input class="user" type="text" placeholder="admin" />
	<input class="pass" type="password" placeholder="*****" />
	<button style:--hue={Math.round(360 * Math.random())} onclick={submit}>Submit</button>
</div>

<style>
	.login {
		width: 100%;
		max-width: 400px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		background: #FFF;
		transition: all .4s;
	}
	.login.hidden {
		opacity: 0;
		pointer-events: none;
		transform: translate(-50%, -50%) scale(1.2);
	}
	.log-in {
		text-align: center;
		font-size: 4rem;
	}
	.conf {
		letter-spacing: 4px;
		opacity: .5;
		text-align: center;
		margin-bottom: 64px;
	}
	input {
		background: #8882;
		display: block;
		margin: 8px;
		padding: 16px;
		font-family: monospace;
		border-radius: 20px;
	}
	input::placeholder {
		opacity: .5;
		color: #888;
	}
	button {
		color: #B00;
		background: #FDD;
		padding: 16px;
		margin: 16px 8px;
		display: block;
		border-radius: 20px;
		text-align: center;
		filter: hue-rotate(calc(1deg * var(--hue)));
	}
</style>
