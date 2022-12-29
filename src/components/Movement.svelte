<script lang="ts">
	import DotMap from '$elements/DotMap.svelte';
	import GradientBar from '$elements/GradientBar.svelte';
	import Stat from '$elements/Stat.svelte';
	import IndustryBrand from '$elements/IndustryBrand.svelte';
</script>

<section class="movement-wrapper center-content">
	<div class="center-content">
		<h2>Undisrupting movement</h2>
		<div class="absolute">
			<DotMap />
		</div>
		<div class="stat-list">
			<Stat label={140000} caption="some stat" />
			<Stat label={97445} caption="some stat" />
			<Stat label={2343423} caption="some stat" />
		</div>
		<IndustryBrand />
	</div>
	<GradientBar />
</section>
