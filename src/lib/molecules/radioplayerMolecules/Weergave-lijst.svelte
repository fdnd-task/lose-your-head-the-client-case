<script>
        import Estafette from '../../atoms/radioplayerAtoms/estafette.svelte';
        import Weergavecard from '../../atoms/radioplayerAtoms/weergave-songcard.svelte';
        import Volgendelijst from '../../atoms/radioplayerAtoms/volgende-lijst.svelte';
</script>

<div class="audio__container">
    <div class="audio__container-estafette">
    <h3>Nu</h3>
    <Estafette />
    <p>16:45</p>
    <Estafette />
    </div>
    <div class="audio__container-card">
        <Weergavecard />
    </div>
</div>
<article class="audio__volgende-lijst">
    <Volgendelijst />
</article>

<style>
    h3 {
        padding-bottom: 5px;
        margin-left: 8px;
        color: var(--secondary-color);
    }

    .audio__container {
        display: flex;
        flex-direction: row;
    }

    .audio__container-card {
        @media only screen and (min-width: 982px) {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
    }
</style>