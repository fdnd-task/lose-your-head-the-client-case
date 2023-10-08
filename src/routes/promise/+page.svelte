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

    h1{
        margin: 1em;
    }

    p{
        padding: 1em;
    }

</style>