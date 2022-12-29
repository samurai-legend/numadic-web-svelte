<script lang="ts">
	import GradientButton from './button/GradientButton.svelte';
	import GradientBarSplit from './elements/GradientBarSplit.svelte';
	import InvestorBrand from './elements/InvestorBrand.svelte';
</script>

<section class="investor-wrapper center-content">
	<h2>Fueled by terrific investors</h2>
	<InvestorBrand />
	<div class="center-content mt-40 mb-10">
		<h2>and you!</h2>
		<p class="investor-description">
			We’re always on the lookout for bright, humble people to join our journey.
		</p>
		<GradientButton label="View open positions" />
	</div>
	<GradientBarSplit />
</section>
