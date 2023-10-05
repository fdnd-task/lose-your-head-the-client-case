<script>
    export let data
    const { teams } = data
</script>

<main>
    <h2>All Teams</h2>
    <h4>View all teams</h4>
    <section>
        <form>
            <input type="search" id="search-term" name="search-term" placeholder="Search team...">
        </form>
        <button>Create your tournament</button>
    </section>
    <section class="all-teams">
        {#each teams as team}
            <div>
                <img src="/src/lib/assets/raimon.png" alt="Raimon Logo">
                <p>{team.name}</p>
            </div>
        {/each}
    </section>
</main>

<style>

    h2{
        margin-bottom: 0.5rem;
    }

    form{
        display: flex;
        flex-direction: column;
        max-width: 25rem;
        margin-top: 3rem;
        gap: 1rem;
    }

    .all-teams{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        background-color: var(--input-background-color);
        border-radius: 15px;
        box-shadow: var(--box-shadow);
    }

    img{
        width: 3.5rem;
        margin-bottom: 0.5rem;
    }

    p{
        font-family: var(--secondary-font-family);
        font-size: 1rem;
        color: var(--primary-font-color);
        text-align: center;
    }

    button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
        width: fit-content;
    }
    
</style>