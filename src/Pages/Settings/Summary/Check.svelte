<script>
	let { icon, color, name, value } = $props()
</script>

<div class="check">
	<div class="icon" style:--color={color}>
		<span class="material-symbols-outlined">{icon}</span>
	</div>
	<div class="text">
		<div class="name">{name}</div>
		<div class="note">{value}</div>
	</div>
</div>
