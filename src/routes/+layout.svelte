<script lang="ts">
	import '../styles/app.scss';
	import Navbar from '$components/Navbar.svelte';
	import { page } from '$app/stores';
	import MousePointer from '$components/elements/MousePointer.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>

<!-- <MousePointer /> -->
<Navbar />

<main class="container"><slot /></main>

<Footer />
