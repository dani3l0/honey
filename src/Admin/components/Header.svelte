<script>
	let { icon, title, color = title.length*24 } = $props()
</script>


<div class="header-bg">
	<div class="header" style:--color="{color}deg">
		<div class="icon">
			<span class="material-symbols-outlined">{icon}</span>
		</div>

		<div class="title">
			<div>{title}</div>
		</div>

		<a class="back" aria-label="Go back" href={"#"}>
			<span class="material-symbols-outlined">close</span>
		</a>
	</div>
</div>


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
		align-items: center;
	}

	.back, .icon {
		display: flex;
		align-items: center;
		width: 60px;
		height: 60px;
		color: inherit;
		text-decoration: none;
		justify-content: center;
		transition: all .2s;
	}

	.icon {
		filter: hue-rotate(var(--color));
		color: #D00;
		background: #FCC;
	}

	.back {
		color: #D00;
		cursor: pointer;
		transition: all .2s;
	}
	.back:hover {
		background: #FCC;
	}

	.title {
		font-size: 1.45rem;
		margin-left: 16px;
	}
</style>
