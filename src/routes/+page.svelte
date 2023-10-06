

<script>
    export let data
    console.log(data.homepages[0])
</script>

{#each data.homepages as homepage }

    <h1>{homepage.introMain.title}</h1>

{/each}


<style>

    h1{
        color: white;
    }   
</style>