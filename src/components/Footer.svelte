<script lang="ts">
	let logo = '/NU-logo-white.svg';

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

	let policies = [
		{ link: '#', label: 'Terms of service' },
		{ link: '#', label: 'Privacy policy' },
		{ link: '#', label: 'Cancellation policy' }
	];
</script>

<footer class="container mt-20 flex flex-col">
	<div class="grid grid-cols-4 w-full">
		<a href="/" class="mt-4"><img class="navbar-logo" src={logo} alt="NU-White logo" /></a>

		<div class="col-span-3">
			<span class="caption-bold">products</span>
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
										class="icomoon icon-{social.icon} text-gray-light text-2xl hover:text-white transition-all duration-150"
									/></a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="bottom-footer">
		<span>&copy; Numadic Ltd. (UK)</span>
		<span>Warm regards from Goa, India</span>
		<span class="flex flex-row">
			{#each policies as policy}
				<a href={policy.link}>{policy.label}</a>
			{/each}
		</span>
	</div>
</footer>
