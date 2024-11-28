<h2 class="chat__header">live chat</h2>
<span class="audio__line"></span>
<ul class="chat__berichten" aria-live="polite">
    <!-- Hier zullen berichten dynamisch gegenereerd worden -->
    <li class="chat__tijd">18:40</li><li class="chat__user">user1:</li><li class="chat__verzonden-bericht">Speel many man van 50 cent</li>
    <li class="chat__tijd">18:41</li><li class="chat__user">user2:</li><li class="chat__verzonden-bericht">Mijn favriete liedje 🤩</li>
    <li class="chat__tijd">18:41</li><li class="chat__user">user3:</li><li class="chat__verzonden-bericht"> 🎶🎶🎶🎶🎶🎶🎶🎶🎶</li>
    <li class="chat__tijd">18:41</li><li class="chat__user">user4:</li><li class="chat__verzonden-bericht">Draai is new york van Alicia keys</li>
    <li class="chat__tijd">18:41</li><li class="chat__user">user3:</li><li class="chat__verzonden-bericht">🎶🎶🎶🎶🎶🎶🎶🎶🎶</li>
    <li class="chat__tijd">18:42</li><li class="chat__user">user4:</li><li class="chat__verzonden-bericht">OMG 😱</li>
    <li class="chat__tijd">18:42</li><li class="chat__user">user5:</li><li class="chat__verzonden-bericht">@User2 ook die van mij</li>
    <li class="chat__tijd">18:42</li><li class="chat__user">user6:</li><li class="chat__verzonden-bericht">Wat een saaie DJ😴</li>
    <li class="chat__tijd">18:42</li><li class="chat__user">user7:</li><li class="chat__verzonden-bericht">🔥🔥🔥🔥🔥🔥🔥🔥🔥</li>
    <li class="chat__tijd">18:42</li><li class="chat__user">user8:</li><li class="chat__verzonden-bericht">lekker bezig DJ</li>
    <li class="chat__tijd">18:42</li><li class="chat__user">user9:</li><li class="chat__verzonden-bericht">😎😎😎😎😎😎</li>
    <li class="chat__tijd">18:42</li><li class="chat__user">user10:</li><li class="chat__verzonden-bericht">feestje💃🏾🕺🏾</li>
    <li class="chat__tijd">18:43</li><li class="chat__user">user11:</li><li class="chat__verzonden-bericht">Skip...</li>
    <li class="chat__tijd">18:43</li><li class="chat__user">user12:</li><li class="chat__verzonden-bericht">Wild</li>
    <li class="chat__tijd">18:43</li><li class="chat__user">user13:</li><li class="chat__verzonden-bericht">Booooooo....</li>
    <li class="chat__tijd">18:43</li><li class="chat__user">user14:</li><li class="chat__verzonden-bericht">Welk liedje komt hierna ??</li>
    <li class="chat__tijd">18:43</li><li class="chat__user">user15:</li><li class="chat__verzonden-bericht">ziek!!!</li>
    <li class="chat__tijd">18:43</li><li class="chat__user">user16:</li><li class="chat__verzonden-bericht">@User14 Runaway Train - Soul Asylum</li>
    <li class="chat__tijd">18:43</li><li class="chat__user">user17:</li><li class="chat__verzonden-bericht">@User14 Deze man is blind</li>
</ul>
<form id="chat___form" class="chat__form" aria-label="Send a message">
    <!-- <label for="chat__input" class="chat__label-hidden">Schrijf een bericht</label> -->
    <input id="chat__input" placeholder="Schrijf een bericht" type="text">
    <button type="submit" class="chat__knop">
        <span class="chat__verzend">Verzenden</span>
        <li><img  width="93" class="chat__pijl" alt="verzend knop" src="/pijl.svg"></li>
    </button>
</form>
<style>
    .chat__header {
        text-align: center;
        padding: 0.32em;
        color: var(--grey);
    }

    .audio__line {
        @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }


        @media only screen and (min-width: 982px) {
            width: 100%;
            height: 2px;
            background-color: var(--grey);
            display: inline-block;
        }
    }

    .chat__berichten {
        padding: 0.5em;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        display: grid;
        grid-template-columns: [first] 40px [line2] 50px [line3] 190px [end];
        grid-template-rows: repeat(19, 35px);
    }

    .chat__tijd, .chat__user{
        font-weight: bold;
    }

/* primary blue */
    .chat__user:nth-child(5) {
        color: var(--primary-color); 
    }

    .chat__user:nth-child(11) {
        color: var(--primary-color); 
    }

    .chat__user:nth-child(11) {
        color: var(--primary-color); 
    }

    .chat__user:nth-child(20) {
        color: var(--primary-color); 
    }

    .chat__user:nth-child(29) {
        color: var(--primary-color); 
    }
    .chat__user:nth-child(38) {
        color: var(--primary-color); 
    }
    .chat__user:nth-child(47) {
        
        color: var(--primary-color); 
    }

    .chat__user:nth-child(56) {

        color: var(--primary-color); 
    }

/* secondary color */

    .chat__user:nth-child(8) {
        color: var(--secondary-color); 
    }

    .chat__user:nth-child(17) {
        color: var(--secondary-color); 
    }

    .chat__user:nth-child(26) {
        color: var(--secondary-color); 
    }

    .chat__user:nth-child(35) {
        color: var(--secondary-color); 
    }

    .chat__user:nth-child(44) {
        color: var(--secondary-color); 
    }

    .chat__user:nth-child(53) {
        color: var(--secondary-color); 
    }

    button {
        border: 1px solid black;
        border-radius: 5px;
        /* width: 300px; */
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 300px;
        align-items: center;
        padding-left: 10px;
    }

    input[type="text"] {
        width: 300px;
        height: 50px;
        border: 1px solid var(--grey);
        border-radius: 5px;
        padding: 10px;
        position: relative;
    }

    button {
        position: absolute;
        bottom: 5em;
        left: 17em;
        background: none;
        border: none;
        display: flex;
        flex-direction: column;
        color: var(--secondary-color);
        align-items: center;
    }

    .chat__pijl {
        width: 20px;
    }
</style>