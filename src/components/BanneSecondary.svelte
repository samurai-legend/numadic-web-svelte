<script>
	import GradientButton from './button/GradientButton.svelte';
</script>

<section class="banner-wrapper center-content">
	<div class="center-content gap-y-7">
		<h1>Life at Numadic</h1>
		<p class="body-1 text-center max-w-[clamp(400px,80vw,797px)]">
			Our primary role is to undisrupt movement. It takes many people to make that vision a reality.
		</p>
	</div>
	<GradientButton label="View open positions" />
</section>

<style lang="scss">
	.banner-wrapper {
		@apply gap-y-16;
	}
</style>
