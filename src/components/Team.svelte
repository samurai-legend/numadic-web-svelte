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

<section class="center-content">
	<div class="center-content gap-y-5 max-w-[clamp(400px,40vw,608px)]">
		<h2>We are Numads</h2>
		<span>
			<h3 class="small-title">Numads - the people of Numadic.</h3>
			<p class="small-para">
				Full stack humans, comfortable across digital and physical landscapes. United on a journey
				to undisrupt movement.
			</p>
		</span>
	</div>

	<div class="grid grid-cols-4 w-full my-20 gap-y-20">
		{#each team as member}
			<div class="center-content gap-y-5">
				{#if member.src}
					<img class="h-[clamp(200px,40vw,414px)] w-fit" src={member.src} alt={member.alt} />
				{/if}
				<span class="small-title capitalize text-white">{member.name}</span>
			</div>
		{/each}
	</div>

	{#each founders as founder}
		<div class="center-content gap-y-5">
			{#if founder.src}
				<img class="h-[clamp(200px,40vw,414px)] w-fit" src={founder.src} alt={founder.alt} />
			{/if}
			<div class="flex flex-col text-center">
				<span class="small-title capitalize text-white">{founder.name}</span>
				<span class="text-white">Founder, {founder.designation}</span>
			</div>
		</div>
	{/each}
</section>
