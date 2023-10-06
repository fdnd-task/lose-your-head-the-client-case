<script>
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";

    export let data
    console.log(data.homepages)
</script>

<svelte:head>
    <title>INK</title>
</svelte:head>

<Header />

<main>

{#each data.homepages as homepage }
<h1>{homepage.introMain.title}</h1>
{/each}

</main>

<Footer />