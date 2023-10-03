<script>
</script>

<nav>
    <div class="nav-content">
        <a href="/" class="nav-item">
            <img src="/src/lib/assets/home-icon.svg" alt="home button">
            <p>Home</p>
        </a>
        <a href="#players" class="nav-item">
            <img src="/src/lib/assets/all-players-icon.svg" alt="all players button">
            <p>All Players</p>
        </a>
        <a href="#players" class="nav-item">
            <img src="/src/lib/assets/all-teams-icon.svg" alt="all teams button">
            <p>All Teams</p>
        </a>
        <a href="#players" class="nav-item">
            <img src="/src/lib/assets/all-tournaments-icon.svg" alt="all tournaments button">
            <p>All <br> Tournaments</p>
        </a>
        <a href="#players" class="nav-item">
            <img src="/src/lib/assets/current-tournament-icon.svg" alt="all players button">
            <p>Current <br> Tournament</p>
        </a>
    </div>
</nav>


<style>

    nav{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin-top: auto;
        margin-right: 0;
        margin-bottom: auto;
        height: 100vh;
        width: 10%;
        padding: 0.8rem;
    }
    
    .nav-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--element-background-color);
        height: 100%;
        width: 100%;
        border-radius: 10px;
        gap: 3rem;
        box-shadow: var(--box-shadow);
    }

    .nav-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        font-family: var(--secondary-font-family);
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--primary-font-color)
    }

    .nav-item img{
        max-width: 2rem;
    }

    a p {
        font-size: clamp(0.4rem, 1vw, 1rem);
    }


</style>