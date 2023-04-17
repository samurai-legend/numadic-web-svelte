<script lang="ts">
	import GradientButton from './button/GradientButton.svelte';
	import DotMap from './elements/DotMap.svelte';
	import GradientBar from './elements/GradientBar.svelte';
	import Stat from './elements/Stat.svelte';

	export let title: string;
</script>

<div class="product-item-wrapper">
	<div class="product-item-content-wrapper">
		<h3 class="product-item--title">{title}</h3>
		<GradientButton label="Learn more" />
		<GradientBar />
		<div class="center-content">
			<h2 class="text-center max-w-[800px]">
				Numadic is the first and only company to enable fully automated fuel payments in India
			</h2>
			<div class="absolute">
				<DotMap />
			</div>
			<div class="stat-list">
				<Stat
					label="52+"
					caption="LIVE LOCATIONS 
				AND growing"
				/>
			</div>
		</div>
	</div>
</div>
