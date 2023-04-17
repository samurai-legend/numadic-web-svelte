<script>
	import BanneSecondary from '$components/BanneSecondary.svelte';
	import JobExpectation from '$components/JobExpectation.svelte';
	import JoinUsPoints from '$components/JoinUsPoints.svelte';
	import OpenPosition from '$components/OpenPosition.svelte';
	import GradientBar from '$components/elements/GradientBar.svelte';
</script>

<BanneSecondary />
<JobExpectation
	jobDescriptions={[
		`Working at Numadic is about being 
	a self-starter and pushing not just for output, 
	but for outcomes too.`
	]}
/>
<JobExpectation
	jobDescriptions={[
		`From the founders to our investors and advisors, what we share is a common respect for the value of human life and of meaningful relationships. `
	]}
/>
<JobExpectation
	jobDescriptions={[
		`We believe that all humans are equal and that the direction of the flow of money should not define the way people are treated.`
	]}
/>
<JobExpectation
	jobDescriptions={[
		`We are looking for full-stack humans that can support us, and challenge the boundaries of technology and imagination, every day.`,
		`We invite you to bring your personal experience, your knowledge, and your creativity to shape the way we enable the future of autonomous vehicle commerce.`,
		`We know you will learn from us and we expect to be taught new things by you.`
	]}
/>

<section class="center-content mb-10">
	<GradientBar />
</section>

<JoinUsPoints />

<OpenPosition />
