<script>
	import Hero from "$lib/components/IndexComponents/Hero.svelte";
	import Introduction from "$lib/components/IndexComponents/Introduction.svelte";
	import Standard from "../lib/components/IndexComponents/Standard.svelte";
	import StandardChapter from "../lib/components/IndexComponents/StandardChapter.svelte";
	import StandardSection from "../lib/components/IndexComponents/StandardSection.svelte";
</script>

<main>
	<Hero heroTitle="Communication and Multimedia Design Midterm" />
	<Introduction />
	<StandardSection>
		<Standard>
			<StandardChapter />
		</Standard>
		<Standard>
			<StandardChapter />
		</Standard>
		<Standard>
			<StandardChapter />
		</Standard>
		<Standard>
			<StandardChapter />
		</Standard>
	</StandardSection>
</main>
