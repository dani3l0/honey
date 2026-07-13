<script>
    import { className } from "../../App/engine/utils";

	let { icon, name, description, onclick } = $props()

	let confirmationVisible = $state(false)
</script>


<button class="wide" onclick={() => confirmationVisible = true}>
	<div class="icon">
		<span class="material-symbols-outlined">{icon}</span>
	</div>
	<div class="text">
		<div class="name">{name}</div>
		<div class="description">{description}</div>
	</div>
</button>

<div class="confirmation {className(confirmationVisible, "visible")}">
	<div class="window">
		<div class="ask">Are you sure?</div>
		<div class="confirm-action">
			<span class="material-symbols-outlined">{icon}</span>
			<div>{name}</div>
		</div>
		<div class="actions">
			<button class="cancel" onclick={() => confirmationVisible = false}>Cancel</button>
			<button onclick={() => {confirmationVisible = false; onclick()}}>Proceed</button>
		</div>
	</div>
</div>


<style>
	button.wide {
		background: #8883;
		border-radius: 16px;
		margin: 12px;
		padding: 16px 12px;
		display: flex;
		align-items: center;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 12px 0 6px;
	}

	.name {
		font-size: 1.15rem;
	}
	.description {
		font-size: .9rem;
		opacity: .5;
	}
	.confirmation {
		background: #8888;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		opacity: 0;
		pointer-events: none;
		visibility: hidden;
		transition: all .3s;
	}
	.confirmation.visible {
		top: 50%;
		opacity: 1;
		visibility: visible;
		pointer-events: all;
	}
	.window {
		position: absolute;
		top: calc(50% + 32px);
		left: 50%;
		width: 100%;
		height: 100%;
		max-width: 400px;
		max-height: 320px;
		transform: translate(-50%, -50%);
		background: #EEE;
		overflow: hidden;
		border-radius: 16px;
		text-align: center;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		box-shadow: 2px 4px 32px #0004;
		transition: all .3s;
	}
	.visible .window {
		top: 50%;
	}

	.ask {
		padding: 14px;
		display: block;
		margin-bottom: 4px;
		border-bottom: 1px solid #8888;
	}
	.actions {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 8px;
		margin: 0 auto 24px;
	}
	.actions button {
		text-align: center;
		background: #6B33;
		color: #241;
		border-radius: 32px;
		padding: 12px;
	}

	.confirm-action span {
		font-size: 56px;
	}
	.confirm-action div {
		font-size: 28px;
	}
	.cancel {
		filter: hue-rotate(120deg);
	}
</style>
