<script lang="ts">
	let brands: string[] = [
		'/images/investors/dynamo.svg',
		'/images/investors/venture-catalysts.png',
		'/images/investors/nine-unicorns.svg',
		'/images/investors/BlueLotus.png',
		'/images/investors/cvw-partners.svg',
		'/images/investors/GX.png'
	];
</script>

<div class="brand-wrapper">
	<div class="brand-list">
		{#each brands as brand}
			<img src={brand} alt={brand} class="h-auto" />
		{/each}
	</div>
</div>
