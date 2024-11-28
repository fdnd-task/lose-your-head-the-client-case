<figure class="audio__figure">
    <img class="audio__amy" width="93" alt="foto Amy whine house" src="/amy-whine-house.png">
    <p class="audio__dj-text"><img class="audio__dj" width="93px" alt="foto dj icoon" src="/DJ.svg"> Sander Hoogendorn</p>
</figure>

<article class="audio__text">
    <h2>Goud van oud</h2>
    <div class="audio_text-group">
    <img width="93" class="audio__klok" alt="tijd icoon" src="/Time.svg">
    <p class="audio__omschrijving"> Back To Black - Amy Winehouse</p>
    </div>
</article>

<style>
    .audio__figure {
        @media only screen and (min-width: 982px) {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        }
    }

    .audio__amy {
        height: 3.75rem;
        width: 3.75rem;
        
        @media only screen and (min-width: 982px) {
            width: 10rem;
            height: 10rem;
        }
    }

    .audio__dj-text {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }
    }

    .audio__dj {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }


        @media only screen and (min-width: 982px) {
            width: 0.8rem;
        }
    }

    .audio__text {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        @media only screen and (min-width: 982px) {
            align-items: center;
            gap: 0.8rem;
        }
    }

    h2 {
        width: 155px;
    }

    .audio__klok {
        width: 1rem;
    }

    .audio__omschrijving {
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
        width: 13rem;
        height: 1em; 
        font-size: 14px;
        position: relative;
        animation: move-words 20s linear infinite;
        margin: 0;
        /* Prevent text from moving too far */
        width: calc(100% - 1rem); /* Prevent text from overflowing */

        @media only screen and (min-width: 480px) {
            padding-left: 0.2em;
            animation: none;
        }
    }

    @keyframes move-words {
        0% {
            transform: translateX(-100%); 
        }
        100% {
            transform: translateX(100%); 
        }
    }

    .audio_text-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative; 
        overflow: hidden; 
    }
</style>