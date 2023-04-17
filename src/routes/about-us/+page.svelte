<script lang="ts">
	import Banner from '$components/Banner.svelte';
	import OpenPosition from '$components/OpenPosition.svelte';
	import Team from '$components/Team.svelte';
	import Undisrupt from '$components/Undisrupt.svelte';
	import ValueSystem from '$components/ValueSystem.svelte';

	let section = {
		banner: {
			title: 'We undisrupt movement.'
		}
	};
</script>

<Banner title={section.banner.title} />
<Undisrupt />
<ValueSystem />
<Team />
<OpenPosition />
