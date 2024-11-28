<script>
    import Slideinmenu_link from '../atoms/Slideinmenu_link.svelte';
    export let menuVisible = false; // Prop to control visibility

</script>

<nav class:visible={menuVisible}>
        <Slideinmenu_link label="Frequenties" sublabel="De FM frequenties van Radio Veronica"/>
        <Slideinmenu_link label="Programma Overzicht" sublabel="Alle programma's van radio Veronica"/>
        <Slideinmenu_link label="DJ Overzicht" sublabel="Alle DJ's van Radio Veronica"/>
        <Slideinmenu_link label="Privacyverklaring" sublabel="Informatie over je gegevens"/>
        <Slideinmenu_link label="Gebruikersvoorwaarden" sublabel="De algemene voorwaarden"/>
        <Slideinmenu_link label="Cookieverklaring" sublabel="Overzicht van gebruikte cookies"/>
        <Slideinmenu_link label="Cookie voorkeuren" sublabel="Bekijk de voorkeuren"/> 
</nav>

<style>
    nav{
        background-color: var(--light);
       position: absolute;
        margin-top: 69.30px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 90;
        width: 100%;
        height: 100%;
        transition:  right  0.3s ease-out;
        top: 0;
        right: -400vw;
        display: none;
    }

    .visible {
        display: flex; /* Ensure the menu becomes visible */
        right: 0; /* Slide into view */
        transition:  right  0.3s ease-out;
    }
        
</style>
    
