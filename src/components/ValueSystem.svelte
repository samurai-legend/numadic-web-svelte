<script lang="ts">
	import Collaboration from '$elements/Collaboration.svelte';
	import Humility from '$elements/Humility.svelte';
	import Transformation from '$elements/Transformation.svelte';
	import GradientBarSplit from './elements/GradientBarSplit.svelte';

	let values = [
		{ label: 'Humility', component: Humility },
		{ label: 'Collaboration', component: Collaboration },
		{ label: 'Transformation', component: Transformation }
	];
</script>

<section class="center-content">
	<h2>The value system that propels us</h2>
	<div class="grid grid-cols-3 w-full my-24">
		{#each values as val}
			<div class="flex flex-col justify-center items-center z-10 gap-y-14">
				<svelte:component this={val.component} />
				<h4 class="text-white">{val.label}</h4>
			</div>
		{/each}
	</div>
	<GradientBarSplit direction="up" />
</section>
