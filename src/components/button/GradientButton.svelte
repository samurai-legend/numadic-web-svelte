<script lang="ts">
	export let label: string;
	export let href: string = '/';
</script>

<a {href} class="button button-gradient">
	{label}
</a>
