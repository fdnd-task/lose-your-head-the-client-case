<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let data
    console.log(data.aboutPages)
</script>

<Header />

<main>

    {#each data.aboutPages as aboutpage }

        <h1>{aboutpage.aboutIntro.title}</h1>
        <h2>{aboutpage.aboutIntro.subTitle}</h2>

        <img src="{aboutpage.aboutIntro.contentImg.url}" alt="content">

        <p> {aboutpage.aboutIntro.aboutInfo}</p>

        <p> {aboutpage.aboutIntro.aboutInfo2}</p>

    {/each}


</main>

<Footer />

<style>
    p{
        padding: 1em;
    }
</style>