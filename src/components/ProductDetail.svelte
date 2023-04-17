<script lang="ts">
	import GradientBar from '$elements/GradientBar.svelte';
	import { Tabs, TabList, TabPanel, Tab } from '$components/tabs/tab';
	import WalletTab from './WalletTab.svelte';
	import TransactionsTab from './TransactionsTab.svelte';

	export let title: string;
</script>

<section class="product-details-wrapper">
	<h2 class="text-center max-w-[min(50vw,900px)]">{title}</h2>

	<Tabs>
		<TabList>
			<Tab>wallets</Tab>
			<Tab>Transactions</Tab>
		</TabList>
		<TabPanel>
			<WalletTab title="Our Wallets product turns vehicles into contactless wallets" />
		</TabPanel>
		<TabPanel>
			<TransactionsTab title="Our Transactions product collects vehicle payments contactlessly" />
		</TabPanel>
	</Tabs>
</section>
