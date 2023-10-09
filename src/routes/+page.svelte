<script>
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";

    export let data
    // console.log(data.homepages)
</script>

<svelte:head>
    <title>INK</title>
</svelte:head>

<Header />

<main>

    {#each data.homepages as homepage }
        <h1>{homepage.introMain.title}</h1>
    {/each}

    <section>
        <div class="intro">
            <p class="intro-text">
                We are dedicated to providing these children with a second chance in life,ensuring
                they have access to education, shelter, nutrition, and an opportunity to pursue their dreams of
                becomingtop football players.
                
                <button class="intro-about-button">ABOUT US</button>
            </p>

            
        </div>
    </section>

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

    h1 {
        font-size: 5em;
        padding: 1em;
        color: var(--justWhite);
        text-transform: uppercase;
    }

    .intro {
        width: 100%;
        height: 75vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12vw 0 0 0;
        background-image: url(/intro-mask.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
    }

    .intro-text {
        display: flex;
        flex-direction: column;
        color: var(--charcoal);
        font-family: 'Jubilat';
        font-size: clamp(2vw, 4vw, 57px);
        padding: 0 14vw;
        line-height: 96%;
    }

    .intro-about-button {
        font-family: 'Apercu';
        font-weight: 700;
        line-height: 140%;
        width: fit-content;
        border: none;
        text-decoration: none;
        outline: none;
        background-color: var(--justWhite);
        border-radius: 40px;
        padding: 10px 20px;
        margin: 2rem 0 0 0;
        transition: 0.2s;
    }

</style>