<script>
        import Chat from '../../molecules/radioplayerMolecules/chat.svelte';
</script>

<ul class="audio__chat">
    <input id="chat__toggle" type="checkbox" />
    <label for="chat__toggle" class="chat__button-container">
    <li><img  width="93" class="audio__group-chat" alt="whats app button" src="/message.svg"></li>
    </label>
    <li>App studio</li>
    <article class="chat">
        <Chat />
    </article>
</ul>

<style>
     input[type="checkbox"] {
        display: none;

        @media only screen and (min-width: 982px) {
            width: 40px;
            height: 40px;
            position: absolute;
            display: unset;
            cursor: pointer;
            opacity: 0;
        }
    }

    .audio__chat {
        position: relative;

        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }

        @media only screen and (min-width: 982px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    } 

    .audio__group-chat {
        width: 2.5rem;
        height: 2.5rem;
    }

    input[type="checkbox"]:checked ~ .chat {
        left: 130px;
}

    .chat {
        position: absolute;
        left: -500px;
        height: 1000px;
        width: 312px;
        border-left: var(--tertairy) 1px solid;
        top: -360px;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
        background-color: var(--light);
    }
</style>