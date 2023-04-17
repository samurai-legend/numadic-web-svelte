<script lang="ts">
	import TeamPlaceholder from './elements/TeamPlaceholder.svelte';

	let team = [
		{ name: 'Aprup', src: '/images/team/aprup.png', alt: 'Aprup' },
		{ name: 'Haston', src: '/images/team/placeholder-team.png', alt: 'Haston' },
		{ name: 'Karishma', src: '/images/team/karishma.png', alt: 'Karishma' },
		{ name: 'Yesh', src: '/images/team/placeholder-team.png', alt: 'Yesh' },
		{ name: 'Prateek', src: '/images/team/prateek.png', alt: 'Prateek' },
		{ name: 'Kaushik', src: '/images/team/placeholder-team.png', alt: 'Kaushik' },
		{ name: 'Solange', src: '/images/team/placeholder-team.png', alt: 'Solange' },
		{ name: 'Karthik', src: '/images/team/placeholder-team.png', alt: 'Karthik' },
		{ name: 'Joystan', src: '/images/team/placeholder-team.png', alt: 'Joystan' },
		{ name: 'Alain', src: '/images/team/placeholder-team.png', alt: 'Alain' },
		{ name: 'Sandeep', src: '/images/team/placeholder-team.png', alt: 'Sandeep' },
		{ name: 'Deepti', src: '/images/team/placeholder-team.png', alt: 'Deepti' },
		{ name: 'Clinton', src: '/images/team/placeholder-team.png', alt: 'Clinton' },
		{ name: 'Dave', src: '/images/team/placeholder-team.png', alt: 'Dave' },
		{ name: 'Enrich', src: '/images/team/placeholder-team.png', alt: 'Enrich' },
		{ name: 'Yogender', src: '/images/team/placeholder-team.png', alt: 'Yogender' }
	];

	let founders = [{ name: 'Luke', src: '/images/team/luke.png', alt: 'Luke', designation: 'CEO' }];
</script>

<section class="center-content my-20">
	<div class="center-content gap-y-5 max-w-[clamp(400px,40vw,608px)]">
		<h2>Meet the Numads</h2>
		<span class="flex flex-col justify-center items-center gap-y-4">
			<h3 class="body-3 text-center">Numads - the people of Numadic.</h3>
			<p class="body-4">
				Full stack humans; skilled across domains. Aligned via a commitment to self improvement. On
				a journey of internal transformation that reflects across every facet of this organisation.
			</p>
		</span>
	</div>

	<div class="grid grid-cols-4 w-full my-20 gap-y-20">
		{#each team as member}
			<div class="center-content gap-y-5">
				{#if member.src}
					<img class="h-[clamp(200px,40vw,414px)] w-fit" src={member.src} alt={member.alt} />
				{/if}
				<span class="body-3 capitalize text-white">{member.name}</span>
			</div>
		{/each}
	</div>

	{#each founders as founder}
		<div class="center-content gap-y-5">
			{#if founder.src}
				<img class="h-[clamp(200px,40vw,414px)] w-fit" src={founder.src} alt={founder.alt} />
			{/if}
			<div class="flex flex-col text-center">
				<span class="body-3 capitalize text-white">{founder.name}</span>
				<span class="text-white">Founder, {founder.designation}</span>
			</div>
		</div>
	{/each}
</section>

<style lang="scss">
	.body-4 {
		@apply text-center leading-5;
	}
</style>
