<script lang="ts">
	import Collaboration from '$elements/Collaboration.svelte';
	import Humility from '$elements/Humility.svelte';
	import Transformation from '$elements/Transformation.svelte';
	import GradientBarSplit from './elements/GradientBarSplit.svelte';

	let values = [
		{
			label: 'Humility',
			component: Humility,
			description: `We are small, as individuals & as an organisation. When you're small, you're likelier to be collaborative. We'll always act small. Because nothing is really big anyway.`
		},
		{
			label: 'Collaboration',
			component: Collaboration,
			description: `We're highly collaborative. We cultivate and nurture a network of brilliant collaborators, within & outside. Collaboration is the shortest path to operationalised transformation.`
		},
		{
			label: 'Transformation',
			component: Transformation,
			description: `Industries are transformed by organisations & organisations are transformed by individuals & individuals are transformed by themselves & each other. Humility leads to transformation.`
		}
	];
</script>

<section class="center-content">
	<h2>The value system that propels us</h2>
	<div class="grid grid-cols-3 w-full my-24">
		{#each values as val}
			<div class="flex flex-col justify-center items-center z-10 gap-y-14 px-14">
				<svelte:component this={val.component} />
				<h5 class="text-white leading-3">{val.label}</h5>
				<p class="body-3 text-center">{val.description}</p>
			</div>
		{/each}
	</div>
	<GradientBarSplit direction="up" />
</section>
