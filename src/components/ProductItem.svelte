<script lang="ts">
	import GradientButton from './button/GradientButton.svelte';

	export let title: string;
	export let description: string;
	export let link: string;
	export let imageLink: string;
</script>

<div class="product-item-wrapper">
	<div class="product-item--image">
		<!-- <img src={imageLink} alt={`Product-image-${imageLink}`} /> -->
	</div>

	<div class="product-item-content-wrapper">
		<h3>{title}</h3>
		<p>{description}</p>
		<GradientButton label="Learn more" />
	</div>
</div>
