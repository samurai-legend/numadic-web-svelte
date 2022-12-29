<script lang="ts">
	export let label: number;
	export let caption: string;
</script>

<div class="stat-wrapper">
	<span class="stat--label">{label.toLocaleString('en-IN')}</span>
	<span class="stat--caption">{caption}</span>
</div>
