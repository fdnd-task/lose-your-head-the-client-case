<main>
    <h2>Create Team</h2>
    <h4>Create your team</h4>
    <section>
        <form>
            <input type="text" id="team-name" name="team-name" placeholder="Team name...">
            <input type="text" id="country-name" name="country-name" placeholder="Country of origin...">
            <label class="custom-file-upload">
                <input type="file" id="add-logo" name="add-logo">
                <div>
                    <img src="/src/lib/assets/add-image-icon.svg" alt="add button">
                    <p>Add logo</p>
                </div>
                </label>
            <button>Next</button>
        </form>
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

    p{
        font-family: var(--primary-font-family);
        font-weight: bold;
        color: var(--primary-font-color);
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input[type="file"]{
        display: none;
    }

    .custom-file-upload{
        display: flex;
        justify-content: center;
        background-color: var(--input-background-color);
        border-radius: 15px;
        box-shadow: var(--box-shadow);
        padding: 1.5rem 0;
    }

    button{
        position: absolute;
        left: 3.5rem;
        bottom: 3.5rem;
        width: fit-content;
    }

</style>