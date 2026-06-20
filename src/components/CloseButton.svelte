<a href={"#"} aria-label="close" class="closebtn">
	<span class="material-symbols-rounded">close</span>
</a>


<style>
	.closebtn {
		color: #B22;
		border-radius: 100px;
		width: 54px;
		height: 54px;
		margin: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		position: relative;
	}
	.closebtn span {
		margin-top: 2px;
	}
	.closebtn::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border-radius: 100px;
		background: #F664;
		opacity: 0;
		z-index: 1;
		transform: scale(.9);
		transition: all .2s;
	}
	.closebtn:hover::after {
		transform: none;
		opacity: 1;
	}
</style>
