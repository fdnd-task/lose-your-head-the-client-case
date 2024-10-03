<script>
	import Veronica from '$lib/assets/Veronica.PNG?enhanced';
	import Facebook from '$lib/assets/Facebook.PNG?enhanced';
	import X from '$lib/assets/X.PNG?enhanced';
	import YT from '$lib/assets/Youtube.PNG?enhanced';
	import IG from '$lib/assets/Instagram.PNG?enhanced';
</script>

<footer class="footer">
    <enhanced:img src={Veronica} class="footer__veronica" alt="logo van veronica in footer" />
    <h2 class="footer__h2">We. Love. Music</h2>
    <ul class="footer__socials">
        <h3 class="footer__h3">volg ons op social media</h3>
        <ul class="footer__socials-icons">
            <li class="footer__icons"><enhanced:img src={Facebook}  alt="socials icoon Facebook" /></li>
            <li class="footer__icons"><enhanced:img src={X} alt="socials icoon X" /></li>
            <li class="footer__icons"><enhanced:img src={YT} alt="social icoon Youtube" /></li>
            <li class="footer__icons"><enhanced:img src={IG} alt="social icoon Instagram" /></li>
        </ul>
    </ul>
    <ul class="footer__radio-veronica">
        <h3 class="footer__h3">Radio Veronica</h3>
        <li class="footer__radio-links">Home</li>
        <li class="footer__radio-links">Programmering</li>
        <li class="footer__radio-links">Ontdek</li>
        <li class="footer__radio-links">Acties</li>
    </ul>
    <ul class="footer__algemeen">
        <h3 class="footer__h3">Algemeen</h3>
        <li class="footer__algemeen-links">Frequenties</li>
        <li class="footer__algemeen-links">Alle programma's</li>
        <li class="footer__algemeen-links">DJ overzicht</li>
        <li class="footer__algemeen-links">Pers</li>
    </ul>
    <span class="footer__underline"></span>
    <p class="footer__copyright">&copy; Mediahuis 2024</p>
    <ul class="footer__FAQ">
        <li class="footer__FAQ-links">Privacy verklaring</li>
        <li class="footer__FAQ-links">Gebruiksvoorwaarden</li>
        <li class="footer__FAQ-links">Cookieverklaring</li>
        <li class="footer__FAQ-links">Cookie voorkeuren</li>
    </ul>
</footer>

<style>
    .footer__h3 {
        font-style: var(--h3-text-size);
    }

    .footer {
        font-family: var(--font-family);
        color: var(--light);
        background-color: var(--color-footer); 
        display: grid;
        height: 50vh;
        grid-template-columns: repeat(4, 0.5fr);
        grid-template-rows: repeat(5, 1fr);
        padding: 3.5rem;
        gap: 2rem;
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

    li {
        cursor: pointer;
    }
</style>