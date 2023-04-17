<script lang="ts">
	import GradientButton from './button/GradientButton.svelte';

	let points = [
		`<strong>Humble, yet driven</strong>`,
		`<strong>Collaborative, yet decisive</strong>`,
		`<strong>Transformative, yet transformable</strong>`,
		`<strong>Observant & self-reflective</strong>`,
		`<strong>Catalytic & cohesive</strong>`,
		`<strong>An all-round explorer of yourself & of life, committed to a journey of becoming 
a full stack human.</strong>`
	];
</script>

<section class="center-content gap-y-14">
	<h2>Join us if you are...</h2>
	<div class="grid grid-cols-3 w-full gap-5 px-[clamp(50px,20vw,100px)] mb-14">
		{#each points as point}
			<div
				class="flex justify-center items-center w-full text-white bg-dark-shade-300 rounded-2xl p-11 aspect-square max-h-[350px]"
			>
				<p class="body-2 text-center">{@html point}</p>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.body-2 {
		@apply font-normal;
	}
</style>
