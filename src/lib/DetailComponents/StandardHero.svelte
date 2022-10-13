<!-- <script>
  import * as helpers from "@prismicio/helpers";

  export let standardHeaderTitle;
  export let standardHeaderIntroduction;
  export let standardNumber;
</script>

<section>
  <h1>{`${standardNumber}.0`} {standardHeaderTitle}</h1>
  <div>{@html helpers.asHTML(standardHeaderIntroduction)}</div>
</section>

<style>
  section {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("/assets/images/detail-hero-image.jpg");
    background-size: cover;
    background-position: center;
    height: 15rem;
    color: var(--color-white);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    color: var(--color-cmd-yellow);
    font-style: normal;
  }

  div {
    max-width: 50rem;
  }

  @media (min-width: 45rem) {
    section {
      padding: 2rem 3rem;
    }

    h1 {
      font-size: 2rem;
    }

    div {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 60rem) {
    section {
      height: 20rem;
      padding: 3rem 5rem;
    }
    h1 {
      font-size: 2.5rem;
    }
  }
</style> -->
<script>
  import ChapterSection from "$lib/components/DetailComponents/ChapterSection.svelte";
  import ChapterContentLeft from "$lib/components/DetailComponents/ChapterContentLeft.svelte";
  import ChapterContentRight from "$lib/components/DetailComponents/ChapterContentRight.svelte";
  import StandardHero from "$lib/components/DetailComponents/StandardHero.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import StandardNavigation from "$lib/components/DetailComponents/StandardNavigation.svelte";
  import StandardNavigationLink from "$lib/components/DetailComponents/StandardNavigationLink.svelte";

  export let standard;
</script>

<PageTransition>
  {#if standard && Object.keys(standard).length}
    <StandardHero
      standardHeaderTitle={standard.data.title}
      standardHeaderIntroduction={standard.data.introduction}
      standardNumber={standard.data.standardnumber}
    />
    {#each standard.data?.chapters as chapter, i}
      <ChapterSection
        chapterTitle={chapter?.data.title}
        chapterNumber={`${standard?.data.standardnumber}.${i + 1}`}
        chapterUID={chapter?.uid}
      >
        <ChapterContentLeft contentLeft={chapter?.data.contentleft} />

        <ChapterContentRight contentRight={chapter?.data.contentright} />
      </ChapterSection>
    {/each}
    <StandardNavigation
      navigationLink={standard.uid}
      standardHeaderTitle={standard.data.title}
    >
      {#each standard.data.chapters as chapter}
        <StandardNavigationLink
          chapterLink={`${standard.uid}/#${chapter?.uid}`}
          chapter={chapter?.data.title}
        />
      {/each}
    </StandardNavigation>
  {/if}
</PageTransition>
