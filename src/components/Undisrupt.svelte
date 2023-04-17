<script lang="ts">
	import GradientBar from './elements/GradientBar.svelte';

	let data = {
		title: 'undisrupt?',
		description: [
			'Movement is typically chaotic and the industries that serve it, quite disrupted.',
			'We exist to simplify, optimise, automate and undisrupt movement.'
		]
	};
</script>

<section class="center-content my-14">
	<div class="center-content gap-y-5 max-w-[min(60vw,890px)]">
		<h2 class="capitalize">{data.title}</h2>
		{#each data.description as desc}
			<p class="body-1 mb-11">
				{desc}
			</p>
		{/each}
	</div>

	<GradientBar />
</section>
