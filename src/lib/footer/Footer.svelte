<script>
    // ENHANCED IMAGES DIE IN WORD GELADEN VANUIT EEN MAP DIE IK HEB AANGEMAAKT IN DE ASSETS FOLDER
    //MET DE SOCIALS ICONS VAN MEDIAHUIS. DIT IS GEIMPORTEERD ALS VARIABLES
	import Veronica from '$lib/assets/Veronica.png?enhanced';
	import Facebook from '$lib/assets/Facebook.png?enhanced';
	import X from '$lib/assets/X.png?enhanced';
	import YT from '$lib/assets/Youtube.png?enhanced';
	import IG from '$lib/assets/Instagram.png?enhanced';
</script>
<!-- DIT ZIJN ENHANCED IMAGES HIERVOOR GEBRUIK IK DE ENHANCED TAG EN DE IMAGES WORDEN INGELADEN.-->
 <!--  DOOR DE IMPORT/VARIABLE NAAM MEE TE GEVEN BINNEN DE SRC EN TUSSEN DE "{}"" CURLY BRACES -->
<footer class="footer">
    <div class="footer__grid">
        <enhanced:img src={Veronica} class="footer__veronica" alt="logo van veronica in footer" width="200px" height="200px" />
        <h2 class="footer__h2">We. Love. Music</h2>
        <ul class="footer__socials">
            <h3 class="footer__h3">volg ons op social media</h3>
            <ul class="footer__socials-icons">
                <li class="footer__icons"><a href="/"><enhanced:img src={Facebook}  alt="socials icoon Facebook" width="200px" height="200px"/></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src={X} alt="socials icoon X" width="200px" height="200px"/></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src={YT} alt="social icoon Youtube" width="200px" height="200px"/></a></li>
                <li class="footer__icons"><a href="/"><enhanced:img src={IG} alt="social icoon Instagram" width="200px" height="200px"/></a></li>
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
/***********************************
                                   *
            FOOTER STYLING         *    
                                   *
***********************************/    
li {
    cursor: pointer;
}
        
.footer__h3 {
    font-style: var(--h3-text-size);
}

.footer {
    background-color: var(--color-footer);
    padding: 1rem;
    @media only screen and (max-width: 980px) {
        display: none;
    }
}

.footer__grid {
    font-family: var(--font-family);
    color: var(--light);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    @media only screen and (min-width: 960px) {
        display: grid;
        grid-template-columns: repeat(4, 0.3fr);
        grid-template-rows: repeat(5, 0.3fr);
        padding: 1rem;
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
}

.footer__veronica {
    width: 6rem;
    height: 2.5rem;
    @media only screen and (min-width: 960px) {
        grid-area: veronica;
        width: 6rem;
        height: 2.5rem;
    }
}


.footer__h2 {
    font-size: 2.2rem;
    @media only screen and (min-width: 960px) {
        grid-area: header-footer;
        width: 13rem;
        font-size: 2.2rem;
    }
}

.footer__icons img {
    width: 1rem;
    height: 1rem;
    @media only screen and (min-width: 960px) {
        grid-area: header-footer;
        width: 13rem;
        font-size: 2.2rem;
    }
}

.footer__socials {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media only screen and (min-width: 960px) {
        grid-area: socials;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}

.footer__socials-icons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    @media only screen and (min-width: 960px) {
        justify-content: flex-start;
    }
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
    @media only screen and (min-width: 960px) {
        
    }
}

.footer__icons:hover {
    background-color: var(--tertairy);
}

.footer__icons img {
    width: 1rem;
    height: 1rem;
}

.footer__radio-veronica {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    @media only screen and (min-width: 960px) {
        grid-area: radio-veronica;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}

.footer__algemeen {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    @media only screen and (min-width: 960px) {
        grid-area: algemeen;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}

.footer__underline {
    width: 100%;
    height: 0.2rem;
    background-color: var(--secondary-color);
    @media only screen and (min-width: 960px) {
        grid-area: space;
        width: 100%;
        height: 0.1rem;
    }
}

.footer__copyright {
    font-size: var(--p-text-size);
    @media only screen and (min-width: 960px) {
        grid-area: copyright;
    }
}

.footer__FAQ {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    @media only screen and (min-width: 960px) {
        grid-area: FAQ;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
}
</style>
