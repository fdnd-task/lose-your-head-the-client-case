<script>
    import Slideinmenu_link from '../atoms/Slideinmenu_link.svelte';
</script>

<main>
    <ul class="slideinmenu">
        <Slideinmenu_link label="Frequenties" sublabel="De FM frequenties van Radio Veronica"/>
        <Slideinmenu_link label="Programma Overzicht" sublabel="Alle programma's van radio Veronica"/>
        <Slideinmenu_link label="DJ Overzicht" sublabel="Alle DJ's van Radio Veronica"/>
        <Slideinmenu_link label="Privacyverklaring" sublabel="Informatie over je gegevens"/>
        <Slideinmenu_link label="Gebruikersvoorwaarden" sublabel="De algemene voorwaarden"/>
        <Slideinmenu_link label="Cookieverklaring" sublabel="Overzicht van gebruikte cookies"/>
        <Slideinmenu_link label="Cookie voorkeuren" sublabel="Bekijk de voorkeuren"/> 
    </ul>
</main>

<style>
    .slideinmenu{
        background-color: var(--light);
        position: absolute;
        margin-top: 69.30px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 99;
        width: 100%;
        right: -500vw;
        transition:  right  0.3s ease-out;
    }

    .slideinmenu.open ul{
        position: relative;
        right: 0vw;
    }

    
</style>