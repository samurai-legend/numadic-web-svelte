<script lang="ts">
	import GradientButton from '$components/button/GradientButton.svelte';
	import DotMap from '$components/elements/DotMap.svelte';
	import GradientBarSplit from '$components/elements/GradientBarSplit.svelte';

	let contactDetails = [
		{
			label: 'Phone',
			content: '+91 777 600 5544',
			desc: 'Weekdays 9 am to 7 pm. Weekends and holidays 9 am to 5 pm',
			type: 'phone'
		},
		{
			label: 'Email',
			content: 'help@numadic.com',
			type: 'email'
		},
		{
			label: 'Want to work with us?',
			content: 'talent@numadic.com',
			type: 'email'
		}
	];
</script>

<section class="contact-us--wrapper">
	<h1>Contact</h1>
	<div class="grid grid-cols-2 my-10">
		<div>
			<div class="flex flex-col items-start">
				<span class="overline-nm">phone</span>
				<p class="h2">+91 777 600 5544</p>
				<span class="body-3 text-white">Weekdays 9am to 7pm. Weekends and holidays 9am to 5pm</span>
			</div>
			<div class="flex flex-col items-start">
				<span class="overline-nm">email</span>
				<p class="h2">hello@numadic.com</p>
			</div>
			<div class="flex flex-col items-start">
				<span class="overline-nm">Want to work with us?</span>
				<GradientButton label="View roles at Numadic" />
			</div>
		</div>
		<div>
			<DotMap />
		</div>
	</div>
	<GradientBarSplit />
</section>
