<script>
    import { className } from "../../App/engine/utils";
	import { compareConfigs, configMain, configMainSnapshot, configSystem, configSystemSnapshot } from "../engine/variables";

	let { icon, title, color = title.length*24 } = $props()

	// Bottom notification toast message
	let notifyTimeout = null
	let notify = $state(false)
	let notifyOk = $state(true)
	let notifyMsg = $state("Toast message")
	const showNotification = (ok, message) => {
		clearTimeout(notifyTimeout)
		notifyOk = ok
		notify = true
		notifyMsg = message
	 	notifyTimeout = setTimeout(() => notify = false, 2000 + 1000 * Number(!ok))
	}

	// Save configs (auto-detect which one was modified)
	const saveConfig = async () => {
		let mainOk = !compareConfigs($configMain, $configMainSnapshot)
		let systemOk = !compareConfigs($configSystem, $configSystemSnapshot)
		if (!mainOk && !systemOk) return
		let body, endpoint
		if (mainOk) {
			body = JSON.stringify($configMain)
			endpoint = "setConfig"
		}
		else {
			body = JSON.stringify($configSystem)
			endpoint = "setSystem"
		}
		let result = await fetch("/api/admin/"+endpoint, {
			method: "POST",
			body: body,
			credentials: "include"
		})
		if (result.ok) {
			configMainSnapshot.set(structuredClone($configMain))
			configSystemSnapshot.set(structuredClone($configSystem))
			showNotification(true, "Saved successfully")
		} else {
			showNotification(false, "Something went wrong...")
		}
	}
</script>


<div class="header-bg">
	<div class="header" style:--color="{color}deg">
		<div class="icon">
			<span class="material-symbols-outlined">{icon}</span>
		</div>

		<div class="title">
			<div>{title}</div>
		</div>

		{#if !compareConfigs($configMain, $configMainSnapshot) || !compareConfigs($configSystem, $configSystemSnapshot)}
			<button class="reset" title="Reset configuration">
				<span class="material-symbols-outlined">reset_wrench</span>
			</button>
			<button class="save" title="Save configuration" onclick={saveConfig}>
				<span class="material-symbols-outlined">save</span>
			</button>
		{/if}
		<a class="back" title="Go back" href={"#"}>
			<span class="material-symbols-outlined">close</span>
		</a>
	</div>
</div>

<div class="save-notification {className(notify, "visible")} {className(notifyOk, "ok")}">{notifyMsg}</div>


<style>
	.header-bg {
		position: sticky;
		top: 0;
		padding: 8px 8px 16px;
		background: linear-gradient(#FFF 72px, #FFF0);
	}
	.header {
		display: flex;
		align-items: stretch;
		justify-content: center;
		padding: 0px;
		border-radius: 16px;
		background: #EEE;
		overflow: hidden;
	}
	.title {
		flex: 1;
		display: flex;
		margin-right: auto;
		align-items: center;
	}

	.icon, .back, .save, .reset {
		display: flex;
		align-items: center;
		width: 60px;
		height: 60px;
		color: inherit;
		text-decoration: none;
		justify-content: center;
		transition: all .2s;
	}
	.back, .save, .reset {
		cursor: pointer;
		color: #D00;
		transition: all .2s;
	}

	.icon {
		filter: hue-rotate(var(--color));
		color: #D00;
		background: #FCC;
	}

	.save {
		filter: hue-rotate(120deg);
	}

	.reset {
		filter: hue-rotate(40deg);
	}

	.back:hover, .save:hover, .reset:hover {
		background: #FCC;
	}

	.title {
		font-size: 1.45rem;
		margin-left: 16px;
	}

	.save-notification {
		position: fixed;
		bottom: -32px;
		padding: 14px 20px;
		border-radius: 32px;
		left: 50%;
		transform: translateX(-50%);
		background: #FCC;
		color: #611;
		pointer-events: none;
		box-shadow: none;
		opacity: 0;
		visibility: hidden;
		transition: all .3s;
	}
	.save-notification.ok {
		background: #DFB;
		color: #241;
	}
	.save-notification.visible {
		box-shadow: 4px 8px 32px #888;
		bottom: 20px;
		opacity: 1;
		visibility: visible;
		pointer-events: all;
	}
</style>
