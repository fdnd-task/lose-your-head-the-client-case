<main>
    <h2>Big Waves</h2>
    <h4>England | London</h4>
    <img src="/src/lib/assets/big-waves.png" alt="Big Waves Logo">
    <section class="team-overview">
        <div>
            <p class="player-name">Mark Evans</p>
            <p>22-03-1984   |   United States   |   Detroit</p>
        </div>
        <div>
            <p class="player-name">Nathan Swift</p>
            <p>22-03-1984   |  Netherlands  |  Amsterdam</p>
        </div>
        <div>
            <p class="player-name">Jack Wallside</p>
            <p>14-02-1994  |  Belgium  |  Brussels</p>
        </div>
    </section>
    <button>Edit</button>
</main>

<style>

    h2{
        margin-bottom: 0.5rem;
    }

    img{
        position: absolute;
        width: 5rem;
        top: 6rem;
        right: 10rem;
    }

    .team-overview{
        width: 60rem;
        margin-top: 2rem;
        background-color: var(--input-background-color);
        border-radius: 15px;
        box-shadow: var(--box-shadow);
    }

    div{
        display: flex;
        padding: 1rem;
        border-bottom: solid 1px var(--bio-player-font-color);
    }

    .player-name{
        font-family: var(--primary-font-family);
        font-weight: bold;
        color: var(--primary-font-color);
        min-width: 10rem;
        margin-right: 5rem;
    }

    p{
        font-family: var(--secondary-font-family);
        color: var(--bio-player-font-color);
        font-weight: bold;
    }

    button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
        width: fit-content;
    }
    
</style>