<script lang="ts">
	import NavItem from './NavItem.svelte';

	export let label: string;
	export let menu: NavItemType[];
</script>

<div class="dropdown-wrapper">
	<span>{label}</span>
	<i class="icomoon icon-chevron text-white text-xs font-normal ml-3" />
	<div class="dropdown-menu">
		{#each menu as item}
			{#if item.href}
				<NavItem href={item.href} label={item.label} />
			{/if}
		{/each}
	</div>
</div>
