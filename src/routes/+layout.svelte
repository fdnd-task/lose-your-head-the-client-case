<script>
    export let data

    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";
</script>

<!-- Special, adds lines to the <head> in /src/app.html -->
<svelte:head>
    <title>INK</title>
</svelte:head>

<Header {data}/>

<main>
<slot />
</main>

<Footer {data}/>

<style>

</style>
