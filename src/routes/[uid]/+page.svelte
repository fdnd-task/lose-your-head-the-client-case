<script>
	import ChapterSection from "$lib/components/DetailComponents/ChapterSection.svelte";
	import ChapterContentLeft from "$lib/components/DetailComponents/ChapterContentLeft.svelte";
	import ChapterContentRight from "$lib/components/DetailComponents/ChapterContentRight.svelte";
	import StandardHero from "$lib/components/DetailComponents/StandardHero.svelte";
	import StandardNavigation from "$lib/components/DetailComponents/StandardNavigation.svelte";
	import StandardNavigationLink from "$lib/components/DetailComponents/StandardNavigationLink.svelte";
	import Header from "../../lib/components/Header.svelte";
	import Content from "../../lib/components/Content.svelte";

	export let data;

	console.log(data.standard.data.chapters);

	// console.log(data.standard.data.title);

	console.log(data.standard.data.chapters);
</script>

<StandardHero
	standardHeaderTitle={data.standard.data.title}
	standardHeaderIntroduction={data.standard.data.introduction}
	standardNumber={data.standard.data.standardnumber}
/>

{#each data.standard.data.chapters as chapter, i}
	<ChapterSection
		chapterTitle={chapter.data.title}
		chapterNumber={`${data.standard.data.standardnumber}.${i + 1}`}
		chapterUID={chapter.uid}
	>
		<ChapterContentLeft contentLeft={chapter.data.contentleft} />
		<ChapterContentRight contentRight={chapter.data.contentright} />
	</ChapterSection>
{/each}
