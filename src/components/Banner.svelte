<script lang="ts">
	import GradientBar from './elements/GradientBar.svelte';

	export let title: string;
	export let description: string | undefined = undefined;
</script>

<section class="banner-wrapper max-w-[min(50vw,900px)] mx-auto">
	<h1>{title}</h1>
	{#if description}
		<p class="max-w-[min(50vw,870px)]">{@html description}</p>
	{/if}

	<GradientBar />
</section>
