<script>
        import Radiotab from '$lib/molecules/radioplayerMolecules/radio-tab-link.svelte';
        import Musicimage from '$lib/molecules/radioplayerMolecules/music-image.svelte';
        import Casting from '$lib/atoms/radioplayerAtoms/cast-button.svelte';
        import Kijklive from '../atoms/radioplayerAtoms/kijklive-button.svelte';
        import PlayButton from '../atoms/radioplayerAtoms/play-button.svelte';
        import Livechat from '../atoms/radioplayerAtoms/livechat-button.svelte';
        import Fullprogressbar from '$lib/molecules/radioplayerMolecules/full-progressbar.svelte';
        import Volumecontrole from '$lib/molecules/radioplayerMolecules/volume-controle.svelte';
        import Spotifylabel from '$lib/molecules/radioplayerMolecules/spotify-label.svelte';
        import Weergavelijst from '../molecules/radioplayerMolecules/Weergave-lijst.svelte';
</script>


<article class="audio">
    <Radiotab />
    <Musicimage />
       <ul class="audio__group">
            <Casting />
            <Kijklive />
            <PlayButton />
            <Livechat />
        </ul>
        <ul class="audio__progressbar">
            <Fullprogressbar />
        </ul>
        <ul class="audio__volume">
            <Volumecontrole />
        </ul>
        <ul class="audio__spotify">
            <Spotifylabel />
        </ul>
    <section class="audio__lijstweergave">
        <h2>Eerder op radio Veronica</h2>
        <Weergavelijst />
    </section>
</article> 


<style>
    article {
        @media only screen and (min-width: 1024px) {
            position: relative;
            bottom: 0;
            height: 1000px;
            width: 312px;
            flex-direction: column;
            padding: 1rem;
            align-items: center;
            z-index: 2;
            font-family: var(--font-family);
        }
    }

    .audio {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 5px;
        width: 96vw;
        height: 70px;
        box-shadow: 7px 3px 25px 0px rgba(213 210 213);
        border-radius: 5px;
        position: absolute;
        bottom: 100px;
        /* margin-left: 0.5em; */
        background-color: var(--light);

        @media only screen and (min-width: 480px) {
            bottom: 115px;
            width: calc(100% - 3%);
            /* margin-left: 1em; */
        }

        @media only screen and (min-width: 1024px) {
            position: relative;
            bottom: 0;
            height: 1000px;
            width: 312px;
            flex-direction: column;
            padding: 1rem;
            align-items: center;
            z-index: 2;
            background-color: var(--light);
        }
    }

    .audio__group {
        display: flex;
        flex-direction: row;
        gap: 0.7rem;
        align-items: center;
        justify-content: flex-end;
        margin-left: auto;

        @media only screen and (min-width: 600px) and (max-width: 980px){
            justify-content: flex-end;
        }

        @media only screen and (min-width: 982px) {
            align-items: unset;
            margin-left: unset;
        }

    }

    .audio__volume {
        display: flex;
        flex-direction: row;
        font-weight: 900;
        align-items: center;
        gap: 0.5em;

        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }
    }

    .audio__spotify {
        display: none;

        @media only screen and (min-width: 982px) {
            text-align: center;
            display: unset;
        }
    }

    .audio__lijstweergave {
        display: none;

        @media only screen and (min-width: 982px) {
            padding: 0.2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 300px;
            position: absolute;
            bottom: 85px;
        }
    }

    .audio__lijstweergave h2{
        padding-bottom: 15px;
    }
</style>