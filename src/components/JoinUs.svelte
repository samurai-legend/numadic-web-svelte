<script lang="ts">
	import GradientButton from './button/GradientButton.svelte';
</script>

<section class="mt-20 mb-32">
	<div class="bg-gray-extra-dark grid grid-cols-2 py-36">
		<div />
		<div class="flex flex-col justify-start gap-y-11">
			<div>
				<span class="caption-bold">join us</span>
				<h5 class="medium-title text-white text-start max-w-[clamp(190px,30vw,340px)]">
					We’ve got some seats on our rocketship.
				</h5>
			</div>

			<GradientButton label="View open positions" />
		</div>
	</div>
</section>
