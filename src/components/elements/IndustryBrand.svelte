<script lang="ts">
	let brands: string[] = [
		'/images/industry-brand/icici-logo.png',
		'/images/industry-brand/hp-logo.png',
		'/images/industry-brand/idfc-logo.png',
		'/images/industry-brand/indian-oil-logo.png'
	];
</script>

<div class="brand-wrapper">
	<p class="body-1 text-center">We are automating vehicle payments for industry leaders in banking & fuelling</p>
	<div class="brand-list-2">
		{#each brands as brand}
			<img src={brand} alt={brand} class="h-auto" />
		{/each}
	</div>
</div>
