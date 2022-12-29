<script lang="ts">
	let logo = '/NU-logo-white.svg';
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

	let products = [
		{ label: 'wallets', link: '#' },
		{ label: 'transactions', link: '#' },
		{ label: 'value-added services', link: '#' }
	];

	let pages = [
		{ tag: 'Hiring', label: 'about us', link: '#' },

		{ label: 'careers', link: '#' },

		{ label: 'contact', link: '#' }
	];

	let socials = [
		{ link: '#', icon: 'facebook' },
		{ link: '#', icon: 'linkedin' },
		{ link: '#', icon: 'twitter' },
		{ link: '#', icon: 'instagram' }
	];
</script>

<footer class="container mt-40 mb-14 flex flex-col gap-y-36">
	<div class="grid grid-cols-4 w-full">
		<h3 class="mt-4">Locations</h3>
		{#each addresses as address}
			<div class="flex flex-col items-start">
				<span
					class="uppercase text-[0.875rem]  leading-[50px] tracking-[0.15rem] font-bold text-gray-light"
					>{address.title}</span
				>
				<p class="text-[1.25rem] font-normal leading-[30px]">{@html address.address}</p>
			</div>
		{/each}
	</div>
	<div class="grid grid-cols-4 w-full">
		<a href="/" class="mt-4"><img class="navbar-logo" src={logo} alt="NU-White logo" /></a>

		<div class="col-span-3">
			<span
				class="uppercase text-[0.875rem]  leading-[50px] tracking-[0.15rem] font-bold text-gray-light"
				>products</span
			>
			<div class="grid grid-cols-3">
				<div class="flex flex-col items-start">
					<ul>
						{#each products as product}
							<li>
								<a
									href={product.link}
									class="text-[0.875rem] font-normal leading-[34px] text-white capitalize"
									>{product.label}</a
								>
							</li>
						{/each}
					</ul>
				</div>

				<div class="flex flex-col items-start justify-end">
					<ul>
						{#each pages as page}
							<li>
								<a
									href={page.link}
									class="text-[0.875rem] font-normal leading-[34px] text-white capitalize"
									>{page.label}</a
								>
							</li>
						{/each}
					</ul>
				</div>

				<div class="flex flex-col items-start justify-start">
					<ul class="flex flex-row gap-x-10">
						{#each socials as social}
							<li>
								<a
									href={social.link}
									class="text-[0.875rem] font-normal leading-[34px] text-white capitalize "
									><i
										class={`icomoon icon-${social.icon} text-gray-light text-2xl hover:text-white transition-all duration-150`}
									/></a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>
