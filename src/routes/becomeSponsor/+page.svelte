<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let data
    // console.log(data.sponsorPages)
</script>

<Header />

<main>


    {#each data.sponsorPages as sponsorPage }

        <h1>{sponsorPage.sponsorMain.title}</h1>

        <p> {sponsorPage.sponsorMain.subTextSponsor}</p>

        <!-- Sponsor opties -->

        <!-- Optie 1 -->

        <ul>
            <li>
                <p>{sponsorPage.sponsorMain.titleSponsorOption}</p>
            </li>
            <li>
                <p>{sponsorPage.sponsorMain.textSponsorOption}</p>
            </li>
            <li>
                <button> Sponsor now</button>
            </li>
        </ul>

        <!-- Optie 2 -->

        <ul>
            <li>
                <p>{sponsorPage.sponsorMain.titleSponsorOption2}</p>
            </li>
            <li>
                <p>{sponsorPage.sponsorMain.textSponsorOption2}</p>
            </li>
            <li>
                <button> Sponsor now</button>
            </li>
        </ul>


        <!-- Optie 3 -->

        <ul>
            <li>
                <p>{sponsorPage.sponsorMain.titleSponsorOption3}</p>
            </li>
            <li>
                <p>{sponsorPage.sponsorMain.textSponsorOption3}</p>
            </li>
            <li>
                <button> Sponsor now</button>
            </li>
        </ul>

    {/each}

</main>

<Footer />

<style>
    h1{
        font-size: 5em;
    }

    p{
        padding: 1em;
    }

    button{
        margin: 1em;
    }

</style>