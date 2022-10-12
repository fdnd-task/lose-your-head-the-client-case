<script>
	import Hero from "$lib/Hero.svelte";
    import Header from "..//lib/Header.svelte";
    import Chapter from "../lib/Chapter.svelte";
  import Content from "../lib/Content.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<body>
    <Header></Header>
<main>
	<Hero heroTitle="Beoogde leerresultaten" />
    <Chapter></Chapter>
    <Content></Content>
</main>


<Footer></Footer>
</body>

<style>
    * {
        font-family: Open Sans,sans-serif;
    }

    div {
        display: block; 
    }

    main {
    background-color: white;
    height: 60em;
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


