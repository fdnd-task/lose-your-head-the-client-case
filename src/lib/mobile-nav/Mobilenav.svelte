<script>
    import { onMount } from 'svelte';
    let isSubnavOpen = false;

    // Function to handle click and toggle class
    function handleClick() {
        isSubnavOpen = !isSubnavOpen;
    }

    // Optionally, you can use onMount for any DOM manipulations needed
    onMount(() => {
        console.log('Component mounted');
    });
</script>

<section>
    <nav class="bottom-nav">
        <ul>
            <li>
                <a href="" aria-label="Home"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_171_3265)"><path d="M12.01 3L3 9.66234V22H9V15.0909H15V22H21V9.66234L12.01 3Z" /></g><defs><clipPath id="clip0_171_3265"><rect width="18" height="19" fill="white" transform="translate(3 3)"/></clipPath></defs></svg>  
                    Home
                </a>
            </li>
            <li>
                <a href="" aria-label="Ontdek"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5H20.297V7.00376H2V5ZM2 11.0113H7.4739V13.015H2V11.0113ZM7.46376 17.0225H2V19.0263H7.46376V17.0225ZM20.2768 15.0269C20.2768 16.149 19.922 17.221 19.2428 18.1327L22 20.8578L20.8444 22L18.0872 19.2749C17.1647 19.9461 16.0902 20.2968 14.9448 20.2968C12.0051 20.2968 9.61279 17.9323 9.61279 15.0269C9.61279 12.1215 12.0051 9.75702 14.9448 9.75702C17.8845 9.75702 20.2768 12.1215 20.2768 15.0269ZM11.2448 15.0269C11.2448 17.0407 12.9073 18.6838 14.9448 18.6838C16.9823 18.6838 18.6447 17.0407 18.6447 15.0269C18.6447 13.0131 16.9823 11.37 14.9448 11.37C12.9073 11.37 11.2448 13.0131 11.2448 15.0269Z" fill="currentcolor"/></svg>
                    Ontdek
                </a>
            </li>
            <li>
                <a href="" aria-label="Radio"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.78 7L9.21 3.85L9.98 2L11.83 2.77L17.36 5.08L19.21 5.85L21.98 7H22V22H2V7H16.78ZM4.17 20H19.83L20 9H4L4.17 20ZM17.82 14.57C17.82 16.65 16.13 18.35 14.04 18.35C11.96 18.35 10.26 16.65 10.26 14.57C10.26 12.49 11.96 10.79 14.04 10.79C16.12 10.79 17.82 12.49 17.82 14.57ZM16.1 14.57C16.1 13.43 15.18 12.51 14.04 12.51C12.9 12.51 11.98 13.43 11.98 14.57C11.98 15.71 12.9 16.63 14.04 16.63C15.18 16.63 16.1 15.71 16.1 14.57ZM8.38 11.72H6.38V13.72H8.38V11.72ZM6.38 15.72H8.38V17.72H6.38V15.72Z" fill="currentcolor"/>
                    </svg>
                    Radio
                </a>
            </li>
            <li>
                <a class="more" on:click={handleClick} href="javascript:void(0)" aria-label="meer menu"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><g id="Icons/Interaction/Meer"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M1 14V10V9H2H6H7V15H6H2H1V14ZM9 10V14V15H10H14H15V9H14H10H9V10ZM18 9H17V10V15H18H22H23V14V9H22H18ZM3 11H5V13H3V11ZM13 11H11V13H13V11ZM19 11H21V13H19V11Z" fill="currentcolor"/></g></svg>
                    Meer
                </a>
            </li>
        </ul>
    </nav>
    <nav class:open={isSubnavOpen} class="subnav">
        <ul>
            <li>
                <a href="" aria-label="Frequenties">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 22" fill="currentcolor"><g id="Isolation_Mode" clip-path="url(#clip0_1038_6683)"><path id="Vector" d="M15 15C17.2 15 19 13.2 19 11C19 8.8 17.2 7 15 7C12.8 7 11 8.8 11 11C11 13.2 12.8 15 15 15ZM15 9.66667C15.7333 9.66667 16.3333 10.2667 16.3333 11C16.3333 11.7333 15.7333 12.3333 15 12.3333C14.2667 12.3333 13.6667 11.7333 13.6667 11C13.6667 10.2667 14.2667 9.66667 15 9.66667Z" fill="currentcolor"/><path id="Vector_2" d="M10.56 6.02668L8.78669 4.04001C6.81336 5.81334 5.68002 8.34668 5.68002 11C5.68002 13.6533 6.81336 16.1867 8.78669 17.96L10.56 15.9733C9.14669 14.7067 8.33336 12.8933 8.33336 11C8.33336 9.10668 9.14669 7.29334 10.56 6.02668Z" fill="currentcolor"/><path id="Vector_3" d="M3.00001 11C3.00001 7.74669 4.28001 4.70669 6.60001 2.42669L4.73334 0.533356C1.89334 3.30669 0.333344 7.02669 0.333344 11C0.333344 14.9734 1.89334 18.6934 4.73334 21.4667L6.60001 19.56C4.28001 17.28 3.00001 14.24 3.00001 10.9867V11Z" fill="currentcolor"/><path id="Vector_4" d="M21.12 3.90668L19.3734 5.92001C20.8 7.16001 21.64 8.96001 21.6667 10.8533C21.6934 12.7467 20.9067 14.5733 19.52 15.8533L21.3334 17.8133C23.28 16.0133 24.3734 13.4667 24.3334 10.8133C24.2934 8.16001 23.12 5.64001 21.12 3.90668Z" fill="currentcolor"/><path id="Vector_5" d="M23.2667 2.26668C25.6267 4.50668 26.9467 7.53335 27 10.7867C27.0533 14.04 25.8133 17.0933 23.5333 19.4133L25.4267 21.2933C28.2267 18.4667 29.7333 14.7333 29.6667 10.76C29.6133 6.78668 27.9867 3.09335 25.1067 0.360016L23.2667 2.29335V2.26668Z" fill="currentcolor"/></g><defs><clipPath id="clip0_1038_6683"><rect width="29.3333" height="21.1333" fill="white" transform="translate(0.333344 0.333344)"/></clipPath></defs></svg>
                    </div>
                    <div>
                        <strong>Frequenties</strong>
                        <p>De FM frequenties van Radio Veronica</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                </a>
            </li>
            <li>
                <a href="" aria-label="Programma Overzicht">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><g id="Icons/Interaction/Overview"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M4 28H14.6667V4H4V28ZM6.66667 6.66667H12V25.3333H6.66667V6.66667ZM17.3333 4V14.6667H28V4H17.3333ZM25.3333 12H20V6.66667H25.3333V12ZM28 28H17.3333V17.3333H28V28ZM25.3333 20H20V25.3333H25.3333V20Z" fill="currentColor"/></g></svg>
                    </div>
                    <div>
                        <strong>Programma Overzicht</strong>
                        <p>Alle programma's van radio Veronica</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
                    </div>
                </a>
            </li>
            <li>
                <a href="" aria-label="DJ Overzicht">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6667 10.6667C22.6667 14.3467 19.68 17.3333 16 17.3333C12.32 17.3333 9.33333 14.3467 9.33333 10.6667C9.33333 6.98667 12.32 4 16 4C19.68 4 22.6667 6.98667 22.6667 10.6667ZM20 10.6667C20 8.46667 18.2 6.66667 16 6.66667C13.8 6.66667 12 8.46667 12 10.6667C12 12.8667 13.8 14.6667 16 14.6667C18.2 14.6667 20 12.8667 20 10.6667ZM4 29.3333V20H28V29.3333H4ZM6.66667 22.6667V26.6667H25.3333V22.6667H6.66667Z" fill="currentColor"/></svg>
                    </div>
                    <div>
                        <strong>DJ Overzicht</strong>
                        <p>Alle DJ's van Radio Veronica</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
                    </div>
                </a>
            </li>
            <li>
                <a href="" aria-label="Privacyverklaring">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><g id="Icons/Interaction/Privacy"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M24 4V12H26.6667V28H5.33334V12H8.00001V4H24ZM21.3333 6.66667H10.6667V12H21.3333V6.66667ZM8.00001 25.3333H24V14.6667H8.00001V25.3333ZM14.6667 17.3333H17.3333V22.6667H14.6667V17.3333Z" fill="currentColor"/></g></svg>
                    </div>
                    <div>
                        <strong>Privacyverklaring</strong>
                        <p>Informatie over je gegevens</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
                    </div>
                </a>
            </li>
            <li>
                <a href="" aria-label="Gebruikersvoorwaarden">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 22 24" fill="currentColor"><g id="Design_here" clip-path="url(#clip0_1038_6761)"><path id="Vector" d="M0.333344 0V24H15.5467L21.6667 17.88V0H0.333344ZM3.00001 2.66667H19V14.6667H12.3333V21.3333H3.00001V2.66667ZM15 20.7867V17.3333H18.4533L15 20.7867Z" fill="#1E1E1E"/><path id="Vector_2" d="M16.3334 5.33331H5.66669V7.99998H16.3334V5.33331Z" fill="currentColor"/><path id="Vector_3" d="M16.3334 10.6667H5.66669V13.3334H16.3334V10.6667Z" fill="currentColor"/><path id="Vector_4" d="M9.66669 16H5.66669V18.6667H9.66669V16Z" fill="currentColor"/></g><defs><clipPath id="clip0_1038_6761"><rect width="21.3333" height="24" fill="white" transform="translate(0.333344)"/></clipPath></defs></svg>
                    </div>
                    <div>
                        <strong>Gebruikersvoorwaarden</strong>
                        <p>De algemene voorwaarden</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
                    </div>
                </a>
            </li>
            <li>
                <a href="" aria-label="Cookieverklaring">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><g id="Icons/Interaction/Cookies"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M18.6667 2.66669H17.3333V16H30.6667V14.6667C30.6667 8.05335 25.28 2.66669 18.6667 2.66669ZM25.3333 13.3334C25.3333 12.6 24.7333 12 24 12C23.2667 12 22.6667 12.6 22.6667 13.3334H20V5.42669C24.08 6.01335 27.32 9.25335 27.9067 13.3334H25.3333ZM16 6.66669H14.6667C8.05332 6.66669 2.66666 12.0534 2.66666 18.6667C2.66666 25.28 8.05332 30.6667 14.6667 30.6667C21.28 30.6667 26.6667 25.28 26.6667 18.6667V17.3334H16V6.66669ZM23.9067 20C23.2533 24.52 19.36 28 14.6667 28C9.51999 28 5.33332 23.8134 5.33332 18.6667C5.33332 13.9734 8.81332 10.08 13.3333 9.42669V20H23.9067ZM10.6667 16C10.6667 16.7364 10.0697 17.3334 9.33332 17.3334C8.59694 17.3334 7.99999 16.7364 7.99999 16C7.99999 15.2636 8.59694 14.6667 9.33332 14.6667C10.0697 14.6667 10.6667 15.2636 10.6667 16ZM14.6667 26.6667C15.403 26.6667 16 26.0697 16 25.3334C16 24.597 15.403 24 14.6667 24C13.9303 24 13.3333 24.597 13.3333 25.3334C13.3333 26.0697 13.9303 26.6667 14.6667 26.6667ZM7.99999 22.6667V20H10.6667V22.6667H7.99999ZM21.3333 8.00002H24V10.6667H21.3333V8.00002ZM20 21.3334H17.3333V24H20V21.3334Z" fill="currentColor"/></g></svg>
                    </div>
                    <div>
                        <strong>Cookieverklaring</strong>
                        <p>Overzicht van gebruikte cookies</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
                    </div>
                </a>
            </li>
            <li>
                <a href="" aria-label="Cookie voorkeuren">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor"><g id="Icons/Interaction/Cookies"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M18.6667 2.66669H17.3333V16H30.6667V14.6667C30.6667 8.05335 25.28 2.66669 18.6667 2.66669ZM25.3333 13.3334C25.3333 12.6 24.7333 12 24 12C23.2667 12 22.6667 12.6 22.6667 13.3334H20V5.42669C24.08 6.01335 27.32 9.25335 27.9067 13.3334H25.3333ZM16 6.66669H14.6667C8.05332 6.66669 2.66666 12.0534 2.66666 18.6667C2.66666 25.28 8.05332 30.6667 14.6667 30.6667C21.28 30.6667 26.6667 25.28 26.6667 18.6667V17.3334H16V6.66669ZM23.9067 20C23.2533 24.52 19.36 28 14.6667 28C9.51999 28 5.33332 23.8134 5.33332 18.6667C5.33332 13.9734 8.81332 10.08 13.3333 9.42669V20H23.9067ZM10.6667 16C10.6667 16.7364 10.0697 17.3334 9.33332 17.3334C8.59694 17.3334 7.99999 16.7364 7.99999 16C7.99999 15.2636 8.59694 14.6667 9.33332 14.6667C10.0697 14.6667 10.6667 15.2636 10.6667 16ZM14.6667 26.6667C15.403 26.6667 16 26.0697 16 25.3334C16 24.597 15.403 24 14.6667 24C13.9303 24 13.3333 24.597 13.3333 25.3334C13.3333 26.0697 13.9303 26.6667 14.6667 26.6667ZM7.99999 22.6667V20H10.6667V22.6667H7.99999ZM21.3333 8.00002H24V10.6667H21.3333V8.00002ZM20 21.3334H17.3333V24H20V21.3334Z" fill="currentColor"/></g></svg>
                    </div>
                    <div>
                        <strong>Cookie voorkeuren</strong>
                        <p>Bekijk de voorkeuren</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</section>

<style>
    /* Bottom menu */
    section {
        overflow: hidden;
        width: 100vw;
    }

    @media only screen and (min-width: 960px) {
        section {
            display: none;
        }
    }

    section .bottom-nav{
        border-top: 1px solid #EDEDED;
        bottom: 0px;
        z-index: 99;
        position: absolute;
        width: 100%;
    }


    section .bottom-nav ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 0px;
        justify-items: center;
    }

    section .bottom-nav ul li {
        width: 100%;
    }

    section .bottom-nav ul li a {
        padding: 2em 0em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        align-items: center;
        color: var(--grey);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3vw;
        font-family: var(--font-family);
    }

    section .bottom-nav ul li a:focus, section .bottom-nav ul li a:active, section .bottom-nav ul li a:hover{
        transform: scale(102%);
        transition: ease-in 0.3s;
    }

    @media only screen and (min-width: 500px) {
        section .bottom-nav ul li a {
            font-size: 16px;
        }
    }

    section .bottom-nav ul li a:focus, 
    section .bottom-nav ul li a:active {
        color: var(--primary-color);
    }

    section .bottom-nav ul li a:focus svg,
    section .bottom-nav ul li a:active svg {
        fill: var(--primary-color);
    }

    section .bottom-nav ul a svg {
        width: 9vw;
        fill: var(--grey);
    }

    @media only screen and (min-width: 500px) {
        section .bottom-nav ul a svg {
            width: 34px;
        }
    }

    /* sub menu */
    .subnav {
        position: absolute;
        top: 0px;
        visibility: hidden;
        background-color: var(--light);
    }
    .subnav ul {
        background-color: var(--light);
        position: absolute;
        margin-top: 69.30px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 99;
    }

    .subnav ul li {
        position: absolute;
        width: 100vw;
        border-bottom: 1px solid #EDEDED;
        right: -500vw;
        transition:  right  0.3s ease-out;
        
    }

    .subnav ul li a{
        display: flex;
        flex-direction: row;
        color: var(--dark);
        gap: 1em;
        padding: 1.25rem 1rem;
        transition: ease-out 0.4s;
        transform: scale(100%);
    }

    .subnav ul li p{
        color: var(--grey);
    }

    .subnav ul li a strong{
        font-size: 1.2rem;
    }

    .subnav ul li a div:nth-child(3){
        display: flex;
        flex-direction: column;
        justify-content: center;
        right: 1rem;
        position: absolute;
        margin-top: 10px;
    }

    .subnav ul li a:hover, .subnav ul li a:active, .subnav ul li a:focus , .subnav ul li strong:focus , .subnav ul li p:focus ,.subnav ul li p:active , .subnav ul li p:hover  {
        color: var(--primary-color);
    }

    .subnav.open {
        visibility: visible;
        transition:  0.3s ease-in;
    }

    .subnav.open ul li{
        position: relative;
        right: 0vw;
    }
    .subnav.open ul li a:focus, .subnav.open ul li a:active, .subnav.open ul li a:hover{
        transform: scale(102%);
        padding: 1.1em 1em;
        transition: ease-in 0.3s;
    }
    .subnav.open ul :nth-child(1){
        transition:  right  0.2s ease-in;
    }
    .subnav.open ul :nth-child(2){
        transition:  right  0.28s ease-out;
    }
    .subnav.open ul :nth-child(3){
        transition:  right  0.36s ease-out;
    }
    .subnav.open ul :nth-child(4){
        transition:  right  0.44s ease-out;
    }
    .subnav.open ul :nth-child(5){
        transition:  right  0.52s ease-out;
    }
    .subnav.open ul :nth-child(6){
        transition:  right  0.60s ease-out;
    }
    .subnav.open ul :nth-child(7){
        transition:  right  0.68s ease-out;
    }
</style>
