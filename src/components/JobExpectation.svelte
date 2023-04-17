<script lang="ts">
	import GradientBar from './elements/GradientBar.svelte';

	export let slide_1: string = '/images/careers/slide-1.png';
	export let slide_2: string = '/images/careers/slide-2.png';
	export let slide_3: string = '/images/careers/slide-3.png';

	export let jobDescriptions = [
		'We are looking for full-stack humans that can support us, and challenge the boundaries of technology and imagination, every day.',
		'We know you will learn from us and we expect to be taught new things by you.',
		'We invite you to bring your personal experience, your knowledge, and your creativity to shape the way we enable the future of autonomous vehicle commerce.'
	];
</script>

<section class="center-content">
	<div class="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-5 w-full">
		<div class="col-span-2 image-1" style="--slide1:url('{slide_1}');" />
		<div class="image-2" style="--slide2:url('{slide_2}');" />
		<div class="image-3" style="--slide3:url('{slide_3}');" />
	</div>
	<div class="mx-auto max-w-[clamp(500px,90vw,850px)]">
		{#each jobDescriptions as desc}
			<p class="body-1 text-center mb-20">
				{desc}
			</p>
		{/each}
	</div>
</section>

<style lang="scss">
	.image-2,
	.image-3 {
		@apply bg-no-repeat aspect-square bg-cover;
	}
	.image-1 {
		@apply bg-no-repeat aspect-video bg-cover;
		background-image: var(--slide1);
	}

	.image-2 {
		background-image: var(--slide2);
	}
	.image-3 {
		background-image: var(--slide3);
	}
</style>
