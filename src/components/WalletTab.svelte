<script lang="ts">
	import GradientButton from './button/GradientButton.svelte';
	import CircleRing from './elements/CircleRing.svelte';
	import DotMap from './elements/DotMap.svelte';
	import GradientBar from './elements/GradientBar.svelte';
	import Stat from './elements/Stat.svelte';

	let logo = '/NU-logo-white.svg';

	export let title: string;
</script>

<div class="product-item-wrapper">
	<div class="product-item-content-wrapper">
		<h3 class="product-item--title">{title}</h3>
		<div class="grid grid-cols-3 my-10 justify-center items-center gap-x-20">
			<div class="product-text-wrapper">
				<p class="body-3">We uniquely map vehicles</p>
			</div>
			<div class="h-[300px] relative">
				<div class="absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center">
					<img class="navbar-logo" src={logo} alt="NU-White logo" />
				</div>
				<CircleRing />
				<div class="outer-circle absolute top-1/2 -translate-y-1/2 -translate-x-1/2">
					<img src="/svg/map-vehicle-2.svg" alt="vehicle-map-1" />
					<img src="/svg/map-vehicle-1.svg" alt="vehicle-map-1" />
				</div>
				<div class="outer-circle--small top">
					<img src="/svg/payment-card.svg" alt="vehicle-map-1" />
				</div>

				<div class="outer-circle--small bottom">
					<img src="/svg/fastag.png" alt="vehicle-map-1" />
				</div>

				<div class="outer-circle--small bottom-right">
					<img src="/svg/upi.svg" alt="vehicle-map-1" />
				</div>

				<div class="outer-circle--small top-right">
					<img src="/svg/card-wrapped.svg" alt="vehicle-map-1" />
				</div>
			</div>
			<div class="product-text-wrapper">
				<p class="body-3">
					To payment instruments such as credit, debit, loyalty, FASTag, UPI & more.
				</p>
			</div>
		</div>
		<GradientButton label="Learn more" />
		<GradientBar />
		<div class="center-content">
			<h2 class="text-center max-w-[800px]">
				Numadic's vehicle wallets app platform powers market leaders in the FASTag industry.
			</h2>
			<div class="absolute">
				<DotMap />
			</div>
			<div class="stat-list">
				<Stat label="2 Million+" caption="users" />
				<Stat label="$1 Bn+" caption="In transactionS to date" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	
</style>
