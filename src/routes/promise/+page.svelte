<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    // import Promise from "$lib/components/Promise.svelte";

    export let data
    // console.log(data.promisePages)
</script>

<Header />

<main>

    {#each data.promisePages as promisePage }

        <h1>{promisePage.promiseIntro.title}</h1>

        <img src="{promisePage.promiseIntro.contentImg.url}" alt="content">

        <p class="text1"> {promisePage.promiseIntro.contentText}</p>

        <p class="text2"> {promisePage.promiseIntro.contentText2}</p>

    {/each}


    {#each data.promisePages as promisePage }

        <h1>{promisePage.promiseMain.title}</h1>

        <p class="text3"> {promisePage.promiseMain.contentText}</p>

        <img src="{promisePage.promiseMain.imgContent.url}" alt="content">

    {/each}


<!-- <Promise {data}/> -->

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


    /*mobile first*/
    h1{
        font-size: 5em;
    }

   .text1, .text2, .text3{
        padding: 1em;
        width:30em;
        font-size: 2em;
    }

   

</style>