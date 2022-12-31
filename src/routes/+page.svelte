<script lang="ts">
	import Banner from '$components/Banner.svelte';
	import Investor from '$components/Investor.svelte';
	import Location from '$components/Location.svelte';
	import Movement from '$components/Movement.svelte';
	import ProductDetail from '$components/ProductDetail.svelte';

	let section = {
		banner: {
			title: 'Automating vehicle commerce',
			description: `Numadic builds the infrastructure 
    connecting auto makers, financiers, banks & energy companies, 
    ultimately <strong>undisrupting vehicle</strong> 
    <strong>movement</strong> for end users.`
		},
		productDetail: {
			title: 'We build products across the vehicle commerce stack'
		}
	};
</script>

<Banner title={section.banner.title} description={section.banner.description} />
<ProductDetail title={section.productDetail.title} />
<Movement />
<Investor />
<Location />
