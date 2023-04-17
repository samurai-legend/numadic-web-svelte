<script lang="ts">
	import ButtonGradient from '$components/button/GradientButton.svelte';
	import NavItem from '$elements/NavItem.svelte';
	import Dropdown from './elements/Dropdown.svelte';

	let logo = '/NU-logo-white.svg';

	let navMenuItems: NavItemType[] = [
		// {
		// 	label: 'product',
		// 	type: 'dropdown',
		// 	menu: [
		// 		{
		// 			label: 'about us',
		// 			href: '/about-us',
		// 			type: 'link'
		// 		},
		// 		{
		// 			label: 'about us',
		// 			href: '/about-us',
		// 			type: 'link'
		// 		}
		// 	]
		// },
		{
			label: 'About us',
			type: 'link',
			href: '/about-us'
		},
		{
			label: 'Life at Numadic',
			type: 'link',
			href: '/careers'
		},
		{
			label: 'contact',
			type: 'link',
			href: '/contact-us'
		}
	];
</script>

<nav class="navbar-container">
	<div class="navbar-wrapper">
		<a href="/"><img class="navbar-logo" src={logo} alt="NU-White logo" /></a>

		<div class="navbar-menu-wrapper">
			<ul class="navbar-menu">
				{#each navMenuItems as navItem}
					{#if navItem.type === 'dropdown' && navItem.menu?.length}
						<Dropdown label={navItem.label} menu={navItem.menu} />
					{:else if navItem.href}
						<NavItem href={navItem.href} label={navItem.label} />
					{/if}
				{/each}
			</ul>
			<ButtonGradient label="Get in touch" href="/contact-us" />
		</div>
	</div>
</nav>
