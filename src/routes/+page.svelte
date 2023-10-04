<script>
</script>

<main>
    <section>
        <div>
            <h2>Create Tournament</h2>
            <p class="subtitle-medium">Create your tournament</p>
        </div>
        <div>
            <p class="subtitle-large">Create Team</p>
            <p class="subtitle-small">Create your team</p>
        </div>
        <div>
            <a href="/players/new">
                <p class="subtitle-large">Create Player</p>
                <p class="subtitle-small">Create your player</p>
            </a>
        </div>
    </section>
    <section>
        <h2>Completed Tournaments</h2>
        <p class="subtitle-medium">View the completed tournaments</p>
    </section>
    <section>
        <h2>Current Tournament</h2>
        <p class="subtitle-medium">Check the current tournament</p>
    </section>
    <section>
    </section>
</main>


<style>

    h2{
        width: 50%;
        margin-bottom: 0.5rem;
    }
        
    .subtitle-large{
        width: 50%;
        margin-bottom: 0.2rem;
    }

    main{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 3fr 2fr;
        height: 100vh;
        width: 100vw;
        gap: 2rem;
        padding-right: calc(10% + 2rem);
    }

    section, div{
        border-radius: 25px;
        box-shadow: var(--box-shadow);
        padding: 4vh 3vw;
    }

    section:nth-of-type(1){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 55% 1fr;
        grid-area: 1 / 1 / 1 / 3;
        gap: 2rem;
        box-shadow: none;
        padding: 0;
    }

    section:nth-of-type(1) div{
        background-color: #E7FFF7;
        overflow: hidden;
    }

    section:nth-of-type(1) div:nth-of-type(1){
        grid-area: 1 / 1 / 2 / 3;
    }

    section:nth-of-type(1) div:nth-of-type(2){
        grid-area: 2 / 1 / 2 / 2;
    }

    section:nth-of-type(1) div:nth-of-type(3){
        grid-area: 2 / 2 / 2 / 3;
    }

    section:nth-of-type(2){
        grid-area: 1 / 3 / 1 / 5;
        background-color: #FFFFFF;
    }

    section:nth-of-type(3){
        grid-area: 2 / 1 / 2 / 4;
        background-color: #D6DCFF;
    }

    section:nth-of-type(3) h2{
        width: 100%;
    }

    section:nth-of-type(4){
        grid-area: 2 / 4 / 2 / 5;
        background-color: pink;
    }


    /*RESPONSIVE KLOPT NOG NIET HELEMAAL*/

    @media only screen and (min-width: 1400px){
        main{
            padding: 2rem calc(10% + 2rem) 2rem 2rem;
        }
    }


    @media only screen and (max-width: 580px){
        main{
            display: grid;
            grid-template-columns: 1fr;
            height: fit-content;
            width: 100vw;
            gap: 2rem;
        }

        section:nth-of-type(1){
            grid-area: 1 / 1;
        }

        section:nth-of-type(2){
            grid-area: 2 / 1;
        }

        section:nth-of-type(3){
            grid-area: 3 / 1;
        }
        
        section:nth-of-type(4){
            grid-area: 4 / 1;
        }
    }

</style>

