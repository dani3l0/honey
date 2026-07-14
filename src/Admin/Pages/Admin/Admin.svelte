<script>
    import { className } from "../../../App/engine/utils";
	import Header from "../../components/Header.svelte";
    import Input from "../../components/Input.svelte";
	import WideButton from "../../components/WideButton.svelte";

	const logout = async () => {
		let resp = await fetch("/api/admin/logout", {
			method: "GET",
			credentials: "include"
		})
		window.location.href = window.location.pathname
	}

	let passNote = $state("")
	let passNoteShown = $state(false)
	let passNoteTimeout = -1
	const changePass = async (e) => {
		e.preventDefault()
		passNoteShown = true
		clearTimeout(passNoteTimeout)
		passNoteTimeout = setTimeout(() => passNoteShown = false, 3000)
		let name = e.target[0].value
		let password = e.target[1].value
		if (name.length < 3 || password.length < 4) {
			passNote = "User or password too short"
			return
		}
		let resp = await fetch("/api/admin/setAdmin", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({name, password})
		})
		let data = await resp.json()
		if (!resp.ok) {
			passNote = `Code ${resp.status}: ${data.data}`
			return
		}
		passNote = `Successful`
		setTimeout(() => window.location.href = window.location.pathname, 500)
	}
</script>


<div>
	<Header icon="password" title="Admin" color={230} />

	<form onsubmit={changePass}>
		<div class="title">Update credentials</div>
		<div class="note {className(!passNoteShown, "hidden")}">{passNote}</div>
		<div class="form">
			<input type="text" name="user" placeholder="Username">
			<input type="password" name="pass" placeholder="Password">
		</div>
		<button>Submit</button>
	</form>

	<WideButton
		icon="logout"
		name="Log out"
		description="Remove the cookie and lock access to configuration panel."
		onclick={logout}
	/>

</div>


<style>
	form {
		background: #8883;
		max-width: 640px;
		border-radius: 20px;
		margin: 32px auto;
		overflow: hidden;
		text-align: center;
	}
	.form {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 14px;
		flex-wrap: wrap;
	}
	input {
		flex: 1;
		margin: 2px;
		max-width: 320px;
		min-width: 120px;
	}

	.title {
		background: #FFF;
		display: inline-block;
		padding: 4px 16px 8px;
		border-radius: 0 0 16px 16px;
		margin-bottom: 4px;
	}

	button {
		display: inline-block;
		background: #68F;
		color: #FFF;
		margin: 0 8px 8px;
		border-radius: 32px;
		text-align: center;
		padding: 8px;
	}

	.note {
		background: #F443;
		color: #B33;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 48px;
		margin: 12px 12px 0;
		border-radius: 32px;
		overflow: hidden;
		transition: all .4s;
	}
	.note.hidden {
		height: 0;
		margin: 0;
		opacity: 0;
	}
</style>
