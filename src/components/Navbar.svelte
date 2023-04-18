<script lang="ts">
	import ButtonGradient from '$components/button/GradientButton.svelte';
	import NavItem from '$elements/NavItem.svelte';
	import Dropdown from './elements/Dropdown.svelte';
	import Modal from './elements/Modal.svelte';

	let showModal = false;

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

			<button on:click={() => (showModal = true)} class="button button-gradient"
				>Get in touch</button
			>
		</div>
	</div>
</nav>

<Modal bind:showModal>
	<h2 slot="header">Get in touch</h2>

	<form class="form my-10">
		<div class="form-field">
			<label for="fullname">Full Name</label>
			<input type="text" name="fullname" placeholder="Fullname" />
		</div>
		<div class="form-field">
			<label for="email">Email</label>
			<input type="text" name="email" placeholder="Email" />
		</div>
		<div class="form-field">
			<label for="message">Message</label>
			<textarea name="message" placeholder="Message" />
		</div>
		<div class="flex flex-row justify-between gap-x-4">
			<button on:click={() => (showModal = false)} class="button button-outline" type="button"
				>Cancel</button
			>
			<button class="button button-blue" type="submit">Send</button>
		</div>
	</form>
</Modal>
