<script>
    import { className } from "../../App/engine/utils";
    import { isLoggedIn } from "../engine/variables";
    import About from "./About/About.svelte";
    import Admin from "./Admin/Admin.svelte";
    import Defaults from "./Defaults/Defaults.svelte";
    import Icons from "./Icons/Icons.svelte";
    import Main from "./Main/Main.svelte";
    import Personalization from "./Personalization/Personalization.svelte";
    import Services from "./Services/Services.svelte";
    import System from "./System/System.svelte";
    import Wallpapers from "./Wallpapers/Wallpapers.svelte";
    import Wrapper from "./Wrapper.svelte";

</script>


<div class="adminpages {className($isLoggedIn, "visible")}">

	<!-- Main page -->
	<Wrapper targetHash="#" top>
		<Main />
	</Wrapper>

	<!-- Services list configuration -->
	<Wrapper targetHash="#services">
		<Services />
	</Wrapper>

	<!-- Default settings for devices -->
	<Wrapper targetHash="#defaults">
		<Defaults />
	</Wrapper>

	<!-- Read-only frontend config -->
	<Wrapper targetHash="#personalization">
		<Personalization />
	</Wrapper>

	<!-- Backend configuration -->
	<Wrapper targetHash="#system">
		<System />
	</Wrapper>

	<!-- Icon manager -->
	<Wrapper targetHash="#icons">
		<Icons />
	</Wrapper>

	<!-- Wallpaper manager -->
	<Wrapper targetHash="#wallpapers">
		<Wallpapers />
	</Wrapper>

	<!-- Admin page & credentials -->
	<Wrapper targetHash="#admin">
		<Admin />
	</Wrapper>

	<!-- About project -->
	<Wrapper targetHash="#about">
		<About />
	</Wrapper>
</div>
