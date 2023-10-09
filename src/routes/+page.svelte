<script>
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";

    export let data
    // console.log(data.homepages)
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

<style>

    /* :root {
        --charcoal: #051A1A;
        --candelLight: #FFDA1D;
        --justWhite: #FFFFFF;
        --jungleGreen: #163A3A;
        --plantGreen: #179446;
        --pictonBlue: #3DBAE1;
        --copy-font: 'Apercu pro', sans-serif;
        --paragraph-font: 'Jubilat', serif;
        --header-font: 'Kirang Haerang', sans-serif;
        --link-hover-color: #FFDA1D;
        --button-hover-color: #FFFFFF;
        --top-nav-sponsor-button-hover-color: #051A1A;
    } */

    h1 {
        font-size: 5em;
        color: var(--justWhite);
        text-transform: uppercase;
        margin: 2em 0;
    }

</style>