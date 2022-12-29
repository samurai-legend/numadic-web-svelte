<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
	<slot />
</button>

<style lang="scss">
	button {
		@apply inline-block text-gray-light font-semibold capitalize text-[clamp(1rem,min(1.5vw,1.5rem),1.5rem)];
		@apply active:select-none;
		-webkit-tap-highlight-color: transparent;
	}

	.selected {
		@apply text-gray-medium bg-white rounded-[100px] px-4 py-1 font-bold; 
	}
</style>
