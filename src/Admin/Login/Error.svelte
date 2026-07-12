<script>
    import { className } from "../../App/engine/utils"

	let { name, visible } = $props()
</script>


<div class="loginerr {className(!visible, "hidden")}">
	<span class="material-symbols-rounded">error</span>
	<div class="name">{name}</div>
</div>


<style>
	.loginerr {
		display: flex;
		align-items: center;
		color: #B44;
		padding: 0 16px;
		margin: 4px 8px 16px;
		border-radius: 20px;
		background: #FCC;
		height: 54px;
		transition: all .3s;
	}
	.loginerr.hidden {
		opacity: 0;
		margin: 0 8px;
		height: 0;
		visibility: hidden;
	}
	span {
		margin-right: 8px;
	}
</style>
