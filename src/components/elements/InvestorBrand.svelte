<script lang="ts">
	let brands: string[] = [
		'/images/investors/dynamo.svg',
		'/images/investors/nine-unicorns.svg',
		'/images/investors/cvw-partners.svg',
		'/images/investors/sap-startup.svg'
	];
</script>

<div class="brand-wrapper">
	<div class="brand-list">
		{#each brands as brand}
			<img src={brand} alt={brand} class="h-auto" />
		{/each}
	</div>
</div>
