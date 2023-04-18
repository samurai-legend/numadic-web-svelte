<script lang="ts">
	import '../styles/app.scss';
	import Navbar from '$components/Navbar.svelte';
	import { page } from '$app/stores';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<!-- <style global>
		@import 'src/styles/app.scss';
	</style> -->
</svelte:head>

<!-- <MousePointer /> -->

<Navbar />
<main class="container">
	<slot />
</main>
<Footer />

<!-- <div class="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen">
	<ShootingStars />
</div> -->
