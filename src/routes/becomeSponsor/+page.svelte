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

    button{
        margin: 1em;
    }

</style>