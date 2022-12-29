<script lang="ts">
	let brands: string[] = [
		'/images/industry-brand/bosch.svg',
		'/images/industry-brand/icici.png',
		'/images/industry-brand/aditya-birla.png',
		'/images/industry-brand/kotak.svg',
		'/images/industry-brand/mahindra.svg'
	];
</script>

<div class="brand-wrapper">
	<p class="brand-title">Together with the industry leaders</p>
	<div class="brand-list">
		{#each brands as brand}
			<img src={brand} alt={brand} class="h-auto" />
		{/each}
	</div>
</div>
