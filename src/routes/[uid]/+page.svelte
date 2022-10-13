<script>
	import ChapterSection from "$lib/components/DetailComponents/ChapterSection.svelte";
	import ChapterContentLeft from "$lib/components/DetailComponents/ChapterContentLeft.svelte";
	import ChapterContentRight from "$lib/components/DetailComponents/ChapterContentRight.svelte";
	import StandardHero from "$lib/components/DetailComponents/StandardHero.svelte";
	import StandardNavigation from "$lib/components/DetailComponents/StandardNavigation.svelte";
	import StandardNavigationLink from "$lib/components/DetailComponents/StandardNavigationLink.svelte";

	export let data;

	// console.log(data.standard.data.chapters[0].data.title);

	// console.log(data.standard.data.title);
</script>

<StandardHero
	standardHeaderTitle={data.standard.data.title}
	standardHeaderIntroduction={data.standard.data.introduction}
	standardNumber={data.standard.data.standardnumber}
/>
