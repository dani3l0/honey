<script>
	import Header from "../../components/Header.svelte";
	import WideButton from "../../components/WideButton.svelte";

	const logout = async () => {
		let resp = await fetch("/api/admin/logout", {
			method: "GET",
			credentials: "include"
		})
		window.location.href = window.location.pathname
	}
</script>


<div>
	<Header icon="password" title="Admin" color={230} />

	<WideButton
		icon="logout"
		name="Log out"
		description="Remove the cookie and lock access to configuration panel."
		onclick={logout}
	/>
</div>
