<script>
</script>

<main>
    <section>
        <div>
            <h2>Create Tournament</h2>
            <h4>Create your tournament</h4>
        </div>
        <div>
            <h3>Create Team</h3>
            <h5>Create your team</h5>
        </div>
        <div>
            <h3>Create Player</h3>
            <h5>Create your player</h5>
        </div>
    </section>
    <section>
        <h2>Completed Tournaments</h2>
        <h4>View the completed tournaments</h4>
    </section>
    <section>
        <h2>Current Tournament</h2>
        <h4>Check the current tournament</h4>
    </section>
    <section>
    </section>
</main>


<style>

    h2{
        width: 50%;
        line-height: 6vh;
        margin-bottom: 0.5rem;
    }
        
    h3{
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
    }

    section, div{
        border-radius: 25px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

