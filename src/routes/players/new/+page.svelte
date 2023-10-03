<script></script>

<main>
    <h2>Create Player</h2>
    <p class="subtitle-medium">Create a player</p>

    <form>
        <input type="text" id="fname" name="fname" placeholder="Player name...">
        <div>
            <input type="date" id="date-of-birth" name="date-of-birth" placeholder="Date of birth...">
            <input type="number" id="jersey-number" name="jersey-number" placeholder="Jersey number...">
        </div>
        <input type="text" id="country-of-origin" name="country-of-origin" placeholder="Country of origin...">
        <input type="text" id="place-of-residence" name="place-of-residence" placeholder="Place of residence...">
        <textarea id="bio" name="bio" placeholder="Bio..." rows="5" columns="5"></textarea>
    </form>
    <button>Save</button>
</main>

<style>

    h2{
        margin-bottom: 0.5rem;
    }

    form{
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input, textarea{
        width: 40%;
        max-width: 35rem;
    }

    form div{
        width: 40%;
    }

    form div input{
        width: 50%;
    }

    button{
        width: fit-content;
        position: absolute;
        inset: auto 0 3.5rem 3.5rem;
    }

</style>