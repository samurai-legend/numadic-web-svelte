<script lang="ts">
	import GradientButton from './button/GradientButton.svelte';

	let points = [
		`<strong>Humble</strong>,<br/>yet passionate`,
		`A true<br/><strong>team player</strong>`,
		`Have an <strong>eye for details</strong> and are a <strong>problem solver</strong>`,
		`Able to <strong>take responsibilities</strong> and <strong>take action</strong>`,
		`Willing to work for a <strong>startup</strong>`,
		`Able to work as <br/>a <strong>full-stack <br/>human</strong>`
	];
</script>

<section class="center-content gap-y-14 pb-20">
	<h2>Join us if you are...</h2>
	<div class="grid grid-cols-3 w-full gap-5 px-[clamp(50px,20vw,100px)] mb-14">
		{#each points as point}
			<div
				class="flex justify-start items-end w-full text-white bg-gray-extra-light p-11 aspect-square max-h-[350px]"
			>
				<p class="medium-title">{@html point}</p>
			</div>
		{/each}
	</div>

	<GradientButton label="View open positions" />
</section>

<style lang="scss">
	.medium-title {
		@apply font-normal;
	}
</style>
