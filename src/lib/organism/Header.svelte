<script>
	import Button from "../atoms/Button.svelte";
</script>
<header class="header">
        <div class="header-left">
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <figure>
                <img width="93px" alt="veronica logo" src="/veronica-logo.svg">
            </figure>
            <nav>
                <ol>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Ontdek</a></li>
                    <li><a href="/">Radio</a></li>
                </ol>
            </nav>
        </div>
        <div class="header-right">
            <Button title="App studio" label="App studio"/>
        </div>    
</header>


<style>
    .header{
        padding: 1rem 2rem;
        background-color: var(--primary-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100vw;
        @media only screen and (min-width: 960px) {
            justify-content: space-between;
            padding: 1rem 2rem;
        }
    }

    /* left box of the flex */
    .header .header-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }

    .header .header-left button{
        padding: 0px;
        border: none;
    }

    /* dropdown button */
    .header .header-left button span{
        height: 2px;
        width: 24px;
        background-color: var(--light);
        position: absolute;
    }

    .header .header-left button span:nth-child(1){
        margin-top: -10px;
    }

    .header .header-left button span:nth-child(2){
        margin-top: -2px;
    }

    .header .header-left button span:nth-child(3){
        margin-top: 6px;
    }

    /* navigation menu */
    .header .header-left > button, nav{
        display: none;
        /* on large screen */
        @media only screen and (min-width: 960px) {
            display: block;
        }
    }

    .header .header-left ol{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding-inline-start: 0px;
    }

    .header .header-left ol li{
        list-style-type: none;
    }

    .header .header-left ol li > a{
        box-shadow: 0px 0px 0px 0px rgba(255,255,255,1);
        color: var(--light);
        font-size: 1em;
        text-transform: uppercase;
        text-decoration: none;
        padding: 0.25em 0em;
        
    }

    .header .header-left ol li > a:hover{
        box-shadow: 0px 2px 0px 0px rgba(255,255,255,1);
        transition: ease-in 0.2s;
        color: var(--light);
        font-size: 1em;
    }


    /* right box of the flex */
    .header .header-right{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
   
   .header .header-right{
    position: absolute;
    right: 2em;
   }
</style>
