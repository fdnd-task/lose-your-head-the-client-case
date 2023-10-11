<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let data
    // console.log(data.sponsorPages)
</script>

<Header />

<main>


    {#each data.sponsorPages as sponsorPage }

        <!-- <h1>{sponsorPage.sponsorMain.title}</h1> -->

        <!-- <p> {sponsorPage.sponsorMain.subTextSponsor}</p> -->

        <!-- Sponsor opties -->

        <!-- Optie 1 -->

        <!-- <ul>
            <li>
                <p>{sponsorPage.sponsorMain.titleSponsorOption}</p>
            </li>
            <li>
                <p>{sponsorPage.sponsorMain.textSponsorOption}</p>
            </li>
            <li>
                <button> Sponsor now</button>
            </li>
        </ul> -->

        <!-- Optie 2 -->

        <!-- <ul>
            <li>
                <p>{sponsorPage.sponsorMain.titleSponsorOption2}</p>
            </li>
            <li>
                <p>{sponsorPage.sponsorMain.textSponsorOption2}</p>
            </li>
            <li>
                <button> Sponsor now</button>
            </li>
        </ul> -->


        <!-- Optie 3 -->

        <!-- <ul>
            <li>
                <p>{sponsorPage.sponsorMain.titleSponsorOption3}</p>
            </li>
            <li>
                <p>{sponsorPage.sponsorMain.textSponsorOption3}</p>
            </li>
            <li>
                <button> Sponsor now</button>
            </li>
        </ul> -->

    {/each}


    <section class="page2-sponsor-page">
        <div class="text-area">
            <h2 class="page2-numbers-header page2-sponsor-text">Become a <span class="yellow">sponsor</span></h2>
        </div>
        <div class="page2-options-wrapper">
            <div class="page2-option page2-option1">
                <svg viewBox="0 0 149 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M142.515 0.00614879C149.727 0.0915737 149.942 0.333528 147.852 22.5583C143.991 63.6479 139.988 104.595 136.045 145.599C134.83 158.214 133.616 170.828 132.406 183.457C131.2 195.986 130.626 197.808 126.631 197.894C116.059 198.093 105.483 197.951 94.9109 197.951L64.907 197.951L64.907 197.979C45.1876 197.979 25.4724 198.008 5.753 197.965C-0.75149 197.965 -0.93599 196.897 1.26936 176.281C6.61111 126.307 11.9443 76.3336 17.226 26.3029C18.2814 16.2797 20.002 10.1005 23.4258 10.4992C24.846 10.67 26.2748 9.8728 27.7035 9.77314C51.4132 8.13582 75.1228 6.0998 98.8325 5.1174C113.412 4.50519 127.935 -0.193176 142.515 0.00614879Z"
                        fill="" />
                </svg>
                <div class="options-text-wrapper">
                    <h4 class="black">Option 1</h4>
                    <p class="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris</p>
                    <button class="sponsor-button sponsor-page-button green">
                        Choose sponsor <svg width="6" height="11" viewBox="0 0 6 11" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1417 0.25L0 1.48375L3.7085 5.5L0 9.51625L1.1417 10.75L6 5.5L1.1417 0.25Z"
                                fill="" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="page2-option page2-option2">
                <svg viewBox="0 0 149 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M142.515 0.00614879C149.727 0.0915737 149.942 0.333528 147.852 22.5583C143.991 63.6479 139.988 104.595 136.045 145.599C134.83 158.214 133.616 170.828 132.406 183.457C131.2 195.986 130.626 197.808 126.631 197.894C116.059 198.093 105.483 197.951 94.9109 197.951L64.907 197.951L64.907 197.979C45.1876 197.979 25.4724 198.008 5.753 197.965C-0.75149 197.965 -0.93599 196.897 1.26936 176.281C6.61111 126.307 11.9443 76.3336 17.226 26.3029C18.2814 16.2797 20.002 10.1005 23.4258 10.4992C24.846 10.67 26.2748 9.8728 27.7035 9.77314C51.4132 8.13582 75.1228 6.0998 98.8325 5.1174C113.412 4.50519 127.935 -0.193176 142.515 0.00614879Z"
                        fill="" />
                </svg>
                <div class="options-text-wrapper">
                    <h4>Option 2</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris</p>

                    <button class="sponsor-button sponsor-page-button">
                        Choose sponsor <svg width="6" height="11" viewBox="0 0 6 11" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1417 0.25L0 1.48375L3.7085 5.5L0 9.51625L1.1417 10.75L6 5.5L1.1417 0.25Z"
                                fill="#051A1A" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="page2-option page2-option3">
                <svg viewBox="0 0 149 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M142.515 0.00614879C149.727 0.0915737 149.942 0.333528 147.852 22.5583C143.991 63.6479 139.988 104.595 136.045 145.599C134.83 158.214 133.616 170.828 132.406 183.457C131.2 195.986 130.626 197.808 126.631 197.894C116.059 198.093 105.483 197.951 94.9109 197.951L64.907 197.951L64.907 197.979C45.1876 197.979 25.4724 198.008 5.753 197.965C-0.75149 197.965 -0.93599 196.897 1.26936 176.281C6.61111 126.307 11.9443 76.3336 17.226 26.3029C18.2814 16.2797 20.002 10.1005 23.4258 10.4992C24.846 10.67 26.2748 9.8728 27.7035 9.77314C51.4132 8.13582 75.1228 6.0998 98.8325 5.1174C113.412 4.50519 127.935 -0.193176 142.515 0.00614879Z"
                        fill="" />
                </svg>
                <div class="options-text-wrapper">
                    <h4>Option 3</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris</p>
                    <button class="sponsor-button sponsor-page-button">
                        Choose sponsor <svg width="6" height="11" viewBox="0 0 6 11" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1417 0.25L0 1.48375L3.7085 5.5L0 9.51625L1.1417 10.75L6 5.5L1.1417 0.25Z"
                                fill="#051A1A" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>



    </section>


</main>

<Footer />

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --charcoal: #051A1A;
    --candelLight: #FFDA1D;
    --justWhite: #FFFFFF;
    --jungleGreen: #163A3A;
    --pictonBlue: #3DBAE1;
    --copy-font: 'Apercu pro', sans-serif;
    --paragraph-font: 'Jubilat', serif;
    --header-font: 'Kirang Haerang', sans-serif;
    --link-hover-color: #FFDA1D;
    --button-hover-color: #FFFFFF;
    --top-nav-sponsor-button-hover-color: #051A1A;
}

body {
    font-family: var(--copy-font);
    background-color: var(--charcoal);
    color: var(--justWhite);
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
}

section {
    padding: 0 6em;
    overflow: hidden;
}

h1 {
    font-family: var(--header-font);
    font-size: 5em;
    color: var(--justWhite);
    text-transform: uppercase;
}

h2 {
    font-family: var(--paragraph-font);
    font-size: 3.5em;
    color: var(--justWhite);
}

h3 {
    font-family: var(--paragraph-font);
    font-size: 2em;
    color: var(--justWhite);
}

p {
    font-family: var(--copy-font);
    font-size: 1em;
    color: var(--justWhite);
}

.yellow {
    color: var(--candelLight);
}
    
    /* ============== SPONSORS SECTION START ============== */

.sponsors {
    background-image: url("/temporary-blue-background.svg");
    background-repeat: no-repeat;
    background-size: contain;
    justify-content: center;
    background-position: center center;
    align-items: center;
    display: flex;
    height: 67vw;
    width: 100vw;
}

.sponsor-center-text {
    text-align: center;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sponsors>.sponsor-center-text>h2 {
    font-weight: 200;
    line-height: 0.9em;
    font-size: clamp(24px, 4.1vw, 60px);
}

.sponsors>.sponsor-center-text>p {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.sponsors>.sponsor-center-text>a {
    background-color: var(--candelLight);
    font-family: Apercu;
    border-radius: 5em;
    padding: 1em 1.8em;
    font-weight: 600;
    font-size: 0.75em;
    margin-top: 2em;
    border: 0px;
    text-decoration: none;
    width: fit-content;
}

.sponsors>.sponsor-center-text>a:hover {
    background-color: var(--justWhite);
    color: var(--charcoal);

}

/* ============== SPONSORS SECTION END ============== */

/* ============== SPONSOR PAGE START ============== */

.sponsor-page {
    height: 100vh;
    padding-top: 7em;
}

.sponsor-text {
    margin-bottom: 1em;
}

.options-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 90vh;
    width: 100%;
    padding: 2em;
}

.options-wrapper svg {
    display: flex;
    align-items: flex-start;
    width: calc(var(--ratio) * 38vw);
    height: auto;
}

.option1 {
    position: absolute;
    left: 18%;
}

.svg1 {
    fill: var(--candelLight);
}

.option2 {
    position: absolute;
    left: 40%;
    /* transform: translateX(50%) translateY(3%); */
}

.svg2 {
    fill: var(--pictonBlue);
}

.option3 {
    position: absolute;
    right: 18%;
    /* transform: translateX(51%) translateY(3%); */
}

.svg3 {
    fill: var(--justWhite);
}

.option {
    height: 100%;
    width: max-content;
}


/* ==================sponsor page 2 =================== */

.page2-sponsor-page {
    height: max-content;
    width: 100%;
    padding-top: 7em;
    overflow-x: hidden;
}

.page2-sponsor-text {
    margin-bottom: 1em;
}

.page2-options-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 77%;
    width: 100%;
}

.page2-option {
    position: relative;
    height: 95%;
    width: 100%;
}

.page2-option1 svg {
    position: relative;
    fill: var(--candelLight);
}

.page2-option2 svg {
    fill: var(--pictonBlue);
}

.page2-option3 svg {
    fill: var(--jungleGreen);
}

.options-text-wrapper {
    position: absolute;
    top: 10%;
    left: 18%;
    width: 60%;
}

.black {
    color: var(--charcoal);
}

.green {
    background-color: var(--justWhite);
    color: var(--charcoal);
}

.green svg {
    fill: var(--charcoal);
}

.green:hover {
    background-color: var(--pictonBlue);
    color: var(--justWhite);
}

.green:hover svg {
    fill: var(--justWhite);
}

.page2-options-wrapper h4 {
    font-size: 2em;
    font-family: var(--paragraph-font);
    margin-bottom: 1em;
}

.sponsor-page-button {  
    z-index: 3;
    margin-top: 20%;
}

 /* SPONSORS*/

.sponsors{
    background-size: cover;
    height: 110vw;
}

.sponsor-center-text {
    text-align: center;
    max-width: 400px;
}

/* ============== SPONSOR SECTION START MOBILE ============== */


@media only screen and (min-width: 1441px) {

.sponsors {
    background-image: url("/temporary-blue-background.svg");
    background-repeat: no-repeat;
    background-size: contain;
    justify-content: center;
    background-position: center center;
    align-items: center;
    display: flex;
    height: 75vw;
    width: 100vw;
}

}

/* ============== SPONSOR SECTION START MOBILE ============== */

</style>