<script>
	let { icon, name, type = "text", description, placeholder = "Empty", value = $bindable() } = $props()
</script>


<div class="config-raw">
	<div class="info">
		<div class="icon">
			<span class="material-symbols-outlined">{icon}</span>
		</div>
		<div class="text">
			<div class="name">{name}</div>
			<div class="description">{description}</div>
		</div>
	</div>
	<div class="input">
		<input {type} {placeholder} bind:value>
	</div>
</div>


<style>
	.config-raw {
		display: flex;
		flex-direction: column;
		background: #8883;
		border-radius: 12px;
		margin: 12px 8px;
		overflow: hidden;
	}
	.info {
		display: flex;
		padding: 16px 6px 12px;
		align-items: stretch;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 12px;
	}
	.icon span {
		font-size: 28px;
	}
	.description {
		opacity: .5;
		font-size: 0.9rem;
	}
	input {
		background: #8881;
		padding: 10px 14px;
		font-size: 0.9rem;
		transition: all .2s;
	}
	input:focus {
		background: #8883;
	}
</style>
