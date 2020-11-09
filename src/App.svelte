<script lang="ts">
	import List from "./components/List.svelte";
	import Navbar from "./components/Navbar.svelte";
	import Footer from "./components/Footer.svelte";
	import axios from "axios";
</script>

<main class="is-widescreen">
	<section class="is-dark is-fullheight">
		<Navbar />
		<List />
		<Footer />
	</section>
</main>

<style lang="scss" global>
	@charset "utf-8";

	// Import a Google Font
	@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

	// Set your brand colors
	$purple: #8A4D76;
	$pink: #FA7C91;
	$brown: #757763;
  $beige-light: #D0D1CD;
	$beige-lighter: #EFF0EB;

	// Update Bulma's global variables
	$family-sans-serif: "Nunito", sans-serif;
	$grey-dark: $brown;
	$grey-light: $beige-light;
	$primary: $purple;
	$link: $pink;
	$widescreen-enabled: false;
	$fullhd-enabled: false;

	$box-padding: 0.7rem;

	// Import only what you need from Bulma
	@import "../node_modules/bulma/sass/utilities/_all.sass";
	@import "../node_modules/bulma/sass/base/_all.sass";
	@import "../node_modules/bulma/sass/elements/_all.sass";
	@import "../node_modules/bulma/sass/form/_all.sass";
	@import "../node_modules/bulma/sass/components/_all.sass";
	@import "../node_modules/bulma/sass/grid/_all.sass";
	@import "../node_modules/bulma/sass/helpers/_all.sass";
	@import "../node_modules/bulma/sass/layout/_all.sass";

	#mainpanel {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;
    background-size: cover;
  }
</style>
