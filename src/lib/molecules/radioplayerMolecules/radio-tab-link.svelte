<script>
    import LinkSVG from '../../atoms/radioplayerAtoms/doorlink-tab.svelte';
</script>


<ul class="audio__list">
    <li class="audio__link"><a href="/">LIVE</a></li>
    <li class="audio__link"><a href="/">STATIONS</a></li>
    <LinkSVG />
</ul>

<span class="audio__line"></span>


<style>
    .audio__list {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        overflow: auto;
        font-family: "BrutalType";
        font-weight: 900;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 100%;

        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }
    }

    .audio__link {
        list-style-type: none;
    }

    a {
        color: var(--grey);
        cursor: pointer;
    }

    .audio__link a:hover {
        color: var(--secondary-color);
        border-bottom: solid 0.2rem var(--secondary-color);
        transition: 0.2s ease-in;
    }

    .audio__line {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }


        @media only screen and (min-width: 982px) {
            width: 111%;
            height: 2px;
            background-color: var(--grey);
        }
    }
</style>