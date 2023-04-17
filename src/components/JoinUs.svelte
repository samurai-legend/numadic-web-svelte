<script lang="ts">
	import GradientButton from './button/GradientButton.svelte';
</script>

<section class="join-us--container">
	<div class="join-us--wrapper">
		<div class="flex flex-col justify-start gap-y-11">
			<div>
				<span class="overline">join us</span>
				<h5 class="body-2 text-white text-start max-w-[clamp(190px,30vw,340px)]">
					We’ve got some seats on our rocketship.
				</h5>
			</div>

			<GradientButton label="View open positions" />
		</div>
	</div>
</section>
