<script lang="ts">
	import Location from "./Location.svelte";

	let logo = '/NU-logo-white.svg';

	let products = [
		{ label: 'wallets', link: '#' },
		{ label: 'transactions', link: '#' },
		{ label: 'value-added services', link: '#' }
	];

	let pages = [
		{ tag: 'Hiring', label: 'about us', link: '#' },
		{ label: 'careers', link: '/careers' },
		{ label: 'contact', link: '/contact-us' }
	];

	let socials = [
		{ link: '#', icon: 'instagram' },
		{ link: '#', icon: 'linkedin' },
		{ link: '#', icon: 'twitter' },
		{ link: '#', icon: 'facebook' }
	];

	let policies = [
		{ link: '#', label: 'Terms of service' },
		{ link: '#', label: 'Privacy policy' },
		{ link: '#', label: 'Cancellation policy' }
	];
</script>

<footer class="footer">
	<Location />
	<div class="footer--content">
		<div class="flex flex-row items-center justify-start">
			<a href="/"><img class="navbar-logo" src={logo} alt="NU-White logo" /></a>
		</div>
		<div class="flex flex-row items-center justify-center">
			<ul class="flex flex-row items-center justify-center gap-x-20">
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
		<div class="flex flex-row items-center justify-end">
			<ul class="flex flex-row gap-x-10">
				{#each socials as social}
					<li class="flex justify-center items-center">
						<a
							href={social.link}
							class="text-[0.875rem] font-normal leading-3 text-white capitalize "
							><i
								class="icomoon icon-{social.icon} text-dark-shade-100 text-2xl hover:text-white transition-all duration-150"
							/></a
						>
					</li>
				{/each}
			</ul>
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
