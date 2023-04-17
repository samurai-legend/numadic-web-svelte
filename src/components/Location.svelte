<script lang="ts">
	let addresses = [
		{
			title: 'india',
			address: `Greyscale HQ,<br/>Dona Paula, Goa<br/>403 004`
		},
		{
			title: 'uk',
			address: `10 John Street, London,<br/>United Kingdom<br/>WC1N 2EB`
		}
	];
</script>

<section class="container my-20">
	<div class="grid grid-cols-4 w-full">
		<h3 class="mt-4">Locations</h3>
		{#each addresses as address}
			<div class="flex flex-col items-start">
				<span
					class="uppercase text-[0.875rem]  leading-[50px] tracking-[0.15rem] font-bold text-dark-shade-100"
					>{address.title}</span
				>
				<p class="text-[1.25rem] font-normal leading-[30px]">{@html address.address}</p>
			</div>
		{/each}
	</div>
</section>
