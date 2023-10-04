<script>
    export let data;
    import { onMount } from "svelte";

    onMount(() => {


    //GLOBAL VARIABLES//    

    const searchTeamInput = document.getElementById('search-team')

    //FUNCTIONS//
    function searchTeams(){
        let input, filter, list, team, p, i, txtValue;
        input = document.getElementById("search-team");
        filter = input.value.toLowerCase();
        list = document.querySelector(".team-results");
        team = document.querySelectorAll(".team")

        for (i = 0; i < team.length; i++) {
        p = team[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            team[i].style.display = "flex";
        } else {
            team[i].style.display = "none";
        }
    }
    }

    //EVENT LISTENERS//
    searchTeamInput.addEventListener('keyup', searchTeams);
    })

</script>

<main>
    <h2>Create Player</h2>

    <section>
        <div>
            <p class="subtitle-medium">Create a player</p>
            <form class="left">
                <input type="text" id="fname" name="fname" placeholder="Player name...">
                <div class="date-jersey">
                    <input type="text" id="date-of-birth" name="date-of-birth" placeholder="Date of birth...">
                    <input type="number" id="jersey-number" name="jersey-number" placeholder="Jersey number...">
                </div>
                <input type="text" id="country-of-origin" name="country-of-origin" placeholder="Country of origin...">
                <input type="text" id="place-of-residence" name="place-of-residence" placeholder="Place of residence..">
                <textarea id="bio" name="bio" placeholder="Bio..."></textarea>
            </form>
        </div>
        <div>
            <p class="subtitle-medium">Add player to team</p>
            <form>
                <input type="text" id="search-team" name="search-team" placeholder="Search Team...">
            </form>
            <div class="team-results">
                {#each data.teamInfo as { name, logo }}
                    <div class="team">
                        <img src={logo} alt="logo">
                        <p>{name}</p>
                    </div>
                {/each}
            </div>
        </div>
    </section>
    <button>Save</button>
</main>

<style>

    main{
        height: 100vh;
        width: 100vw;
        padding-right: calc(10% + 3.5rem);
    }

    section{
        display: flex;
        gap: 2rem;
    }

    section > div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 40vw;
        height: 60vh;
    }

    .left{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 1rem;
    }
    

    form input{
        width: 100%;
    }

    .date-jersey{
        display: flex;
        gap: 1rem;
        width: 100%;
    }

    textarea{
        flex-grow: 2;
    }

    button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
    }

    .team-results{
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        flex-grow: 2;
        overflow-y: scroll;
        padding: 0.5rem 0 2rem 0;
    }

    .team{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 40%;
        background-color: white;
        border-radius: 20px;
        box-shadow: var(--box-shadow);
        padding: 1.5rem 1rem;
        font-family: var(--secondary-font-family);
        text-align: center;
    }

    .team img{
        width: 50%;
    }


</style>