<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Promise from "$lib/components/Promise.svelte";

    export let data
    // console.log(data.promisePages)
</script>

<Header />

<main>

    {#each data.promisePages as promisePage }

        <h1>{promisePage.promiseIntro.title}</h1>

        <img src="{promisePage.promiseIntro.contentImg.url}" alt="content">

        <p> {promisePage.promiseIntro.contentText}</p>

        <p> {promisePage.promiseIntro.contentText2}</p>

    {/each}

    <Promise {data}/>

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

    h1{
        font-size: 5em;
    }

    p{
        padding: 1em;
    }

</style>