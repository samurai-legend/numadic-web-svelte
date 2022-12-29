<script lang="ts">
	import GradientBar from '$elements/GradientBar.svelte';
	import { Tabs, TabList, TabPanel, Tab } from '$components/tabs/tab';
	import ProductItem from './ProductItem.svelte';

	export let title: string;

	let tabpanels = [
		{
			title: 'Bringing IDs and wallets onto every vehicle',
			description:
				'Numadic builds the infrastructure connecting auto makers, financiers, banks & energy companies, ultimately undisrupting vehicle movement...',
			imageLink: '',
			link: ''
		},
		{
			title: 'Tab 2',
			description:
				'Numadic builds the infrastructure connecting auto makers, financiers, banks & energy companies, ultimately undisrupting vehicle movement...',
			imageLink: '',
			link: ''
		},
		{
			title: 'Tab 3',
			description:
				'Numadic builds the infrastructure connecting auto makers, financiers, banks & energy companies, ultimately undisrupting vehicle movement...',
			imageLink: '',
			link: ''
		}
	];
</script>

<section class="product-details-wrapper">
	<h2 class="text-center max-w-[min(50vw,900px)]">{title}</h2>

	<Tabs>
		<TabList>
			<Tab>wallets</Tab>
			<Tab>Transactions</Tab>
			<Tab>Value-added services</Tab>
		</TabList>
		{#each tabpanels as tab}
			<TabPanel>
				<ProductItem {...tab} />
			</TabPanel>
		{/each}
	</Tabs>
	<GradientBar />
</section>
