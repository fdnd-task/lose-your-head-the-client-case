<script>
    export let data;
    // console.log(data.promisePages)
</script>


{#each data.promisePages as promisePage }

<h1>{promisePage.promiseMain.title}</h1>

<p> {promisePage.promiseMain.contentText}</p>

<img src="{promisePage.promiseMain.imgContent.url}" alt="content">

{/each}


<style>

    h1{
        font-size: 1em;
        margin: 1em;
    }

    p{
        padding: 1em;
    }

</style>
