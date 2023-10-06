

<script>
    export let data
    console.log(data)
</script>

{#each data.homepages as homepage }

    <h1>{homepage.introMain.title}</h1>
    <img src={homepage.header.inkLogo.url} alt="logo">

{/each}


