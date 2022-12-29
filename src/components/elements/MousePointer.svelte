<script lang="ts">
	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	let size = spring(1);
</script>

<svelte:body
	on:mousemove={(e) => {
		coords.set({ x: e.pageX, y: e.pageY });
	}}
	on:mousedown={() => size.set(1.5)}
	on:mouseup={() => size.set(1)}
/>

<div
	class="circle"
	style="left:{$coords.x}px; top:{$coords.y}px; transform:scale({$size}) translate(-50%,-50%);"
/>

<style lang="scss">
	.circle {
		@apply h-9 w-9 z-[1000] pointer-events-none absolute
         bg-gray-light rounded-full origin-[-25%_-25%];
	}
</style>
