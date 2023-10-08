<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let data
    // console.log(data.aboutPages)
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

    h1, h2{
        font-size: 5em;
        display: inline-block;
    }

    h2{
        color: var(--candelLight);
        font-family: 'Kirang Haerang';
    }

    img{
        display: block;
        float: right
    }
    
    p{
        padding: 1em;
    }

</style>