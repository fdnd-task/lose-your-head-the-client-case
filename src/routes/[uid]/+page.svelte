<script>
	import Hero from "$lib/Hero.svelte";
    import Header from "$lib/Header.svelte";
    import Chapter from "$lib/Chapter.svelte";
    import Content from "$lib/Content.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

    <Header></Header>
	<Hero heroTitle="Beoogde leerresultaten" />
    <Chapter />
    <Content />
    <Footer />



<style>
    div {
        display: block; 
    }

    body {
    background-color: #EEEEEE;
    color: black;
    max-width: 60rem;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
}


</style>