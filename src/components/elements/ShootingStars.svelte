<script lang="ts"></script>

<div class="star-container">
	{#each Array(20) as _}
		<div class="shooting_star" />
	{/each}
</div>

<style lang="scss">
	$shooting-time: 1500ms;

	.star-container {
		@apply relative w-full h-full;
	}

	.shooting_star {
		@apply w-[2px] absolute  rounded-[999px];

		background: linear-gradient(-45deg, #999999, rgba(0, 0, 255, 0));

		filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
		animation: tail $shooting-time ease-in-out infinite,
			shooting $shooting-time ease-in-out infinite;

		@for $i from 1 through 20 {
			&:nth-child(#{$i}) {
				$delay: random(9999) + 0ms;
				top: calc(100% - #{random(1920) - 200px});
				left: calc(100% - #{random(1920) + 0px});
				animation-delay: $delay;
				&::before,
				&::after {
					animation-delay: $delay;
				}
			}
		}
	}

	@keyframes tail {
		0% {
			height: 0;
		}

		30% {
			height: 100px;
		}

		100% {
			height: 0;
		}
	}

	@keyframes shooting {
		0% {
			transform: translateY(0) rotate(-180deg);
		}

		100% {
			transform: translateY(-400px) rotate(-180deg);
		}
	}
</style>
