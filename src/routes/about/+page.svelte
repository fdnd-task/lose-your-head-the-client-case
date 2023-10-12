<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let data
    // console.log(data.aboutPages)
</script>

<Header />

<main>

    {#each data.aboutPages as aboutpage }

        <h1>{aboutpage.aboutIntro.title}</h1>
        <h2>{aboutpage.aboutIntro.subTitle}</h2>

    <section class="information">


        <article class="info1"> 
            <div class="lijn"> </div>
            <p class="tekst1"> {aboutpage.aboutIntro.aboutInfo}</p>
        </article>

        <div class="info"> 
            <img class="background-info" src="/Mask-group.png" alt="background">
        </div>

        <div class="story-image">
            <img class="img2" src="{aboutpage.aboutIntro.contentImg.url}" alt="content">
        </div>

        <p class="infoAbout2"> {aboutpage.aboutIntro.aboutInfo2}</p>
        
        <hr color="#FFDA1D">

        <div class="info2"> 
            <img class="background-info2" src="/mask2-group.png" alt="background">
        </div>
    

    </section>
    {/each}


</main>

<Footer />

<style>



/*desktop*/


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



    h1, h2{
        font-size: 7em;
        display: inline-block;
        transform: rotate(-6deg);
        margin-bottom: 0.5em;
    }

    h1{
        color: var(--candelLight);
        margin-left: 1.5em;
    }
    h2{
        color: white;
        font-family: 'Kirang Haerang';
        margin-left: 0.4em;
        margin-top: 1em;
    }

    .info{
        margin: 0 auto;

        position: relative;
        bottom: 25em;
        z-index: -5;

        overflow: hidden;
    }

    .background-info{
        width: 100%;
        height: 45em;
        padding: 3em;
    }

    p{
        padding: 1em;
        text-align: left;
        font-size: 1.5rem;
        max-width: 30em;
        font-weight: bold;
        justify-content: center;
        margin: auto;
    }

    .lijn {
        border-top: 3px var(--candelLight) solid;
        padding-top: 3em;
        width: 24em;
        margin-left: auto;
        margin-right: auto;
        
    }

    .info1 {
        align-items: center;
        padding: 4em;

        position: relative;
        top: 5em;
    }


    .info2 {

        align-items: center;
        margin-top: -12em;
        height: 800px;
        width: 600;
    }


    img.background-info2 {
        width: 90%;
        display: flex;
        margin: 0 auto;

        z-index: -5;
    }

    hr {
        color: #FFDA1D;
        width: 390px;
        display: flex;
        height: 4px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3em;

        
    }

    .infoAbout2{
        z-index: 10;
    }

    .story-image{
        overflow: hidden;

        position: relative;
        bottom: 20em;

    }

    .img2{
        width: 75%;
        display: flex;
        margin: 0 auto;
    }



/* Mobile */

/* @media only screen and (min-width: 320px) {

*{
        align-items: center;
    }

    h1, h2{
        font-size: 7em;
        display: inline-block;
        transform: rotate(-6deg);
        margin-bottom: 0.5em; 
         margin-left: 1em;
    } 

    h1{
        color: var(--candelLight);
        margin-left: 1.5em;
    }
    h2{
        color: white;
        font-family: 'Kirang Haerang';
         margin-left: 4em;
        margin-top: 1em; 
    }

    img{
        display: block;
        float: center; 
        width: 70em;
        margin: auto;
        
    }

   
    p{
        padding: 1em;
        text-align: left;
        font-size: 1.5rem;
        width: 34em;
        font-weight: bold;
        justify-content: center;
        margin: auto;
    }

    .info1 {
        background-image: url("/Mask-group.png");
        height: 800px;
        align-items: center;
        padding: 4em;
    }

    .info2 {
        background-image: url("/static/mask2-group.png");
        align-items: center;
        margin-top: 2em;
        height: 800px;
    }

    hr {
        color: #FFDA1D;
        width: 390px;
        display: flex;
        height: 4px;
        margin: auto;
    }


} */



</style>