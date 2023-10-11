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

    <!-- {#each data.homepages as homepage }

    <section class="header-main">
        <h1>{homepage.introMain.title}</h1>
        <h1>{homepage.introMain.subTitle}</h1>
        <h1>{homepage.introMain.subTitle2}</h1>
    </section>

    {/each} -->

    <section class="header-main">
        <div class="hero-title">
            <h1 class="hero-heading" aria-label="Where the real legends begin">
                <div class="hero-title-where slide-first" aria-hidden="true">
                    <span>W</span>
                    <span>H</span>
                    <span>E</span>
                    <span>R</span>
                    <span>E</span>
                </div>
                <div class="hero-title-the-real slide-first" aria-hidden="true">
                    <div>
                        <span>T</span>
                        <span>H</span>
                        <span>E</span>
                    </div>
                    <div>
                        <span>R</span>
                        <span>E</span>
                        <span>A</span>
                        <span>L</span>
                    </div>
                </div>
                <div class="hero-title-legends" aria-hidden="true">
                    <span>L</span>
                    <span>E</span>
                    <span>G</span>
                    <span>E</span>
                    <span>N</span>
                    <span>D</span>
                    <span>S</span>
                </div>
                <div class="hero-title-begin slide-second" aria-hidden="true">
                    <span>B</span>
                    <span>E</span>
                    <span>G</span>
                    <span>I</span>
                    <span>N.</span>
                </div>
            </h1>
        </div>
    </section>

    <!-- /* HEADER END */ -->

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

    <!-- /* INTRO END */ -->

    {#each data.homepages as homepage }

    <section class="playerCards">
        <h1>{homepage.playerCards.title}</h1>
    </section>

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


    /* HEADER START */

    .header-main {
        display: flex;
        width: 100%;
        margin: 2em;
    }

    .hero-title {
        display: flex;
        flex-direction: column;
        width: 40%;
        transform: rotate(-2deg);
    }

    .hero-heading {
        font-weight: normal;
    }

    .hero-title span {
        font-size: clamp(36px, 9vw, 128px);
        font-family: 'Kirang Haerang';
        text-transform: uppercase;
        display: flex;
        height: fit-content;
        line-height: 62%;
    }

    .hero-title-where,
    .hero-title-the-real,
    .hero-title-the-real div,
    .hero-title-legends,
    .hero-title-begin {
        display: flex;
        align-items: flex-end;
    }

    .hero-title-the-real {
        width: fit-content;
        margin: 0 0 0 auto;
        gap: 2vw;
    }

    .hero-title-where span:nth-of-type(1),
    .hero-title-where span:nth-of-type(2),
    .hero-title-the-real>div:nth-of-type(2) span:nth-of-type(2) {
        font-size: clamp(2rem, 11.5vw, 168px);
    }

    .hero-title-legends {
        color: var(--candelLight);
    }

    .hero-title-legends span {
        font-size: clamp(40px, 10vw, 144px);
    }

    .hero-title-legends span:nth-of-type(1),
    .hero-title-legends span:nth-of-type(7) {
        font-size: clamp(36px, 9vw, 128px);
    }


    .hero-title-legends span:nth-of-type(4) {
        font-size: clamp(29px, 7.2vw, 104px);
    }

    .hero-title-begin {
        width: fit-content;
        margin: 0 0 0 auto;
    }

    .hero-title-begin span:nth-of-type(2),
    .hero-title-begin span:nth-of-type(3) {
        font-size: clamp(32px, 7.8vw, 112px);
    }

    /* HEADER END */

    /* MAIN INTRO */

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
        margin: 1em 0;
    }

    @media (min-width: 600px){

        .intro-text  {
            font-size: 1.5em;
        }

    }


    @media (min-width: 800px){

        .intro-text {
            font-size: 1.7em;
        }
    }

    @media (min-width: 1000px){

        .intro-text {
            font-size: 2em;
            padding: 0px 10vw;
        }

    }

    @media (min-width: 1000px){

        .intro-text {
            font-size: 2.7em;
        }

        .intro-about-button {
            font-size: 20px;
            margin: 2em 0;
        }
    }

    @media (min-width: 1500px){

        .header-main{
            margin: 5em;
        }

        .intro-text {
            font-size: 2.5em;
        }

        .intro-about-button {
            font-size: 22px;
            margin: 2.2em 0;
        }
    }

</style>