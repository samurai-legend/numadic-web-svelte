<script>
	import GradientButton from './button/GradientButton.svelte';
</script>

<section class="banner-wrapper center-content">
	<div class="center-content gap-y-7">
		<h1>Careers at Numadic</h1>
		<p class="text-center max-w-[clamp(400px,80vw,797px)]">
			We lead, we innovate, we simplify and we learn from each other as we embark on the journey to
			undisrupt movement.
		</p>
	</div>
	<GradientButton label="View open positions" />
</section>

<style lang="scss">
	.banner-wrapper {
		@apply gap-y-16;
	}
</style>
