<script>
	import Veronica from '$lib/assets/Veronica.PNG?enhanced';
	import Facebook from '$lib/assets/Facebook.PNG?enhanced';
	import X from '$lib/assets/X.PNG?enhanced';
	import YT from '$lib/assets/Youtube.PNG?enhanced';
	import IG from '$lib/assets/Instagram.PNG?enhanced';
</script>

<footer class="footer">
    <enhanced:img src={Veronica} class="footer__veronica" alt="logo van veronica in footer" />
    <h2 class="footer__header-footer">We. Love. Music</h2>
    <ul class="footer__socials">
        <h3>volg ons op social media</h3>
        <ul class="footer__socials-icons">
            <li><enhanced:img src={Facebook} class="footer__icons" alt="socials icoon Facebook" /></li>
            <li><enhanced:img src={X} class="footer__icons" alt="socials icoon X" /></li>
            <li><enhanced:img src={YT} class="footer__icons" alt="social icoon Youtube" /></li>
            <li><enhanced:img src={IG} class="footer__icons" alt="social icoon Instagram" /></li>
        </ul>
    </ul>
    <ul class="footer__radio-veronica">
        <h4>Radio Veronica</h4>
        <li class="footer__radio-links">Home</li>
        <li class="footer__radio-links">Programmering</li>
        <li class="footer__radio-links">Ontdek</li>
        <li class="footer__radio-links">Acties</li>
    </ul>
    <ul class="footer__algemeen">
        <h4>Algemeen</h4>
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
    .footer {
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

    .footer__header-footer {
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
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        display: flex;
        flex-direction: row;
        padding: 0.5rem;
    }

    ul h4 {
        font-size: var(--h4-text-size);
    }

    .footer__copyright {
        grid-area: copyright;
    }

    .footer__FAQ {
        grid-area: FAQ;
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
</style>