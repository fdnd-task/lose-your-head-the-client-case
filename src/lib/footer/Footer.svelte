<script>
    // ENHANCED IMAGES DIE IN WORD GELADEN VANUIT EEN MAP DIE IK HEB AANGEMAAKT IN DE ASSETS FOLDER
    //MET DE SOCIALS ICONS VAN MEDIAHUIS. DIT IS GEIMPORTEERD ALS VARIABLES
	import Veronica from '$lib/assets/Veronica.PNG?enhanced';
	import Facebook from '$lib/assets/Facebook.PNG?enhanced';
	import X from '$lib/assets/X.PNG?enhanced';
	import YT from '$lib/assets/Youtube.PNG?enhanced';
	import IG from '$lib/assets/Instagram.PNG?enhanced';
</script>
<!-- DIT ZIJN ENHANCED IMAGES HIERVOOR GEBRUIK IK DE ENHANCED TAG EN DE IMAGES WORDEN INGELADEN.-->
 <!--  DOOR DE IMPORT/VARIABLE NAAM MEE TE GEVEN BINNEN DE SRC EN TUSSEN DE "{}"" CURLY BRACES -->
<footer class="footer">
    <div class="footer__grid">
        <enhanced:img src={Veronica} class="footer__veronica" alt="logo van veronica in footer" />
        <h2 class="footer__h2">We. Love. Music</h2>
        <ul class="footer__socials">
            <h3 class="footer__h3">volg ons op social media</h3>
            <ul class="footer__socials-icons">
                <li class="footer__icons"><a href="/"><enhanced:img src={Facebook}  alt="socials icoon Facebook" /></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src={X} alt="socials icoon X" /></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src={YT} alt="social icoon Youtube" /></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src={IG} alt="social icoon Instagram" /></a></li>
            </ul>
        </ul>
        <ul class="footer__radio-veronica">
            <h3 class="footer__h3">Radio Veronica</h3>
            <li class="footer__radio-links"><a href="/">Home</a></li>
            <li class="footer__radio-links"><a href="/">Programmering</a></li>
            <li class="footer__radio-links"><a href="/">Ontdek</a></li>
            <li class="footer__radio-links"><a href="/">Acties</a></li>
        </ul>
        <ul class="footer__algemeen">
            <h3 class="footer__h3">Algemeen</h3>
            <li class="footer__algemeen-links"><a href="/">Frequenties</a></li>
            <li class="footer__algemeen-links"><a href="/">Alle programma's</a></li>
            <li class="footer__algemeen-links"><a href="/">DJ overzichtAlle programma's</a></li>
            <li class="footer__algemeen-links"><a href="/">Pers</a></li>
        </ul>
        <span class="footer__underline"></span>
        <p class="footer__copyright">&copy; Mediahuis 2024</p>
        <ul class="footer__FAQ">
            <li class="footer__FAQ-links"><a href="/">Privacy verklaring</a></li>
            <li class="footer__FAQ-links"><a href="/">Gebruiksvoorwaarden</a></li>
            <li class="footer__FAQ-links"><a href="/">Cookieverklaring</a></li>
            <li class="footer__FAQ-links"><a href="/">Cookie voorkeuren</a></li>
        </ul>
    </div>

</footer>

<style>
    li {
        cursor: pointer;
    }
    
    .footer__h3 {
        font-style: var(--h3-text-size);
    }

    .footer {
        background-color: var(--color-footer);
        padding: 3.5rem;
    }

    .footer__grid {
        font-family: var(--font-family);
        color: var(--light);
        display: grid;
        grid-template-columns: repeat(4, 0.3fr);
        grid-template-rows: repeat(5, 0.3fr);
        padding: 3.5rem;
        grid-template-columns: repeat(4, 0.5fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 1rem;
        grid-template-areas:
        "veronica . . ."
        "header-footer . radio-veronica algemeen"
        "socials . radio-veronica algemeen"
        "space space space space"
        "copyright . FAQ FAQ"
        ;
    }

    .footer__veronica {
        grid-area: veronica;
        width: 6rem;
        height: 2.5rem;
    }

    .footer__h2 {
        grid-area: header-footer;
        width: 13rem;
        font-size: 2.2rem;
    }

    .footer__radio-veronica {
        grid-area: radio-veronica;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footer__algemeen {
        grid-area: algemeen;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footer__underline {
        grid-area: space;
        width: 100%;
        height: 0.1rem;
        background-color: var(--secondary-color);
    }

    .footer__socials {
        grid-area: socials;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footer__socials-icons {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .footer__icons {
        background-color: var(--secondary-color);
        display: flex;
        border-radius: 3rem;
        width: 2rem;
        height: 2rem;
        justify-content: center;
        padding: 0.5rem;
        cursor: pointer;
    }

    .footer__icons:hover {
        background-color: var(--tertairy);
    }

    .footer__icons img {
        width: 1rem;
        height: 1rem;
    }

    .footer__copyright {
        grid-area: copyright;
        font-size: var(--p-text-size);
    }

    .footer__FAQ {
        grid-area: FAQ;
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }


</style>
