<script>
    import { onMount } from "svelte";
	import { className } from "../../App/engine/utils";
	import { getConfigs, isLoggedIn, onhashchange } from "../engine/variables";
	import Error from "./Error.svelte";
    import { hash } from "../../App/engine/variables";
    import BigName from "../components/BigName.svelte";

	let userInput = $state(null)
	let passInput = $state(null)
	let errorVisible = $state(false)
	let errTimeout = null

	const submit = async (e) => {
		e.preventDefault()
		let authData = {
			"name": userInput.value,
			"password": passInput.value
		}
		const resp = await fetch("/api/admin/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(authData),
			credentials: "include"
		})
		setTimeout(() => isLoggedIn.set(resp.ok), 100)
		if (!e.firstTime) {
			errorVisible = !resp.ok
			clearTimeout(errTimeout)
			errTimeout = setTimeout(() => errorVisible = false, 2500)
		}
		if (resp.ok) {
			await getConfigs()
			onhashchange()
		}
	}
	onMount(() => {
		const fakeEvent = { preventDefault: () => {}, firstTime: true }
		submit(fakeEvent)
	});

</script>

<div class="login {className($isLoggedIn, "hidden")}">
	<BigName title="Login" subtitle="Configuration page" />
	<Error name="Invalid login or password" visible={errorVisible} />
	<form onsubmit={submit}>
		<input class="user" type="text" placeholder="admin" bind:this={userInput} />
		<input class="pass" type="password" placeholder="*****" bind:this={passInput} />
		<button style:--hue={Math.round(360 * Math.random())} type="submit">Submit</button>
	</form>
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
		visibility: hidden;
		pointer-events: none;
		transform: translate(-50%, -50%) scale(1.2);
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
