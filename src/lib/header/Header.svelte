<script>
	// logic goes here
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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Ondek</a></li>
                    <li><a href="#">Radio</a></li>
                </ol>
            </nav>
        </div>
        <div class="header-right">
            <button class="whatsapp">
                <figure>
                    <img width="24px" alt="whatsapp naar ons" src="/whatsapp-white-icon.svg">
                </figure>
            </button>
            <button class="search">
                <figure>
                    <img width="24px" alt="whatsapp naar ons" src="/whatsapp-white-icon.svg">
                </figure>
            </button>
        </div>    
</header>


<style>
    .header{
        padding: 0rem 0rem;
        background-color: #0091ff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100vw;
        @media only screen and (min-width: 1000px) {
            justify-content: space-between;
            padding: 0rem 2rem;
        }
    }

    /* left box of the flex */
    .header .header-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .header .header-left button{
        padding: 0px;
        border: none;
    }

    /* dropdown button */
    .header .header-left button span{
        height: 2px;
        width: 24px;
        background-color: white;
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
        @media only screen and (min-width: 1000px) {
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
        text-decoration: none;
        color: white;
        font-size: 1em;
        text-transform: uppercase;
        
    }

    .header .header-left ol li > a:hover{
        text-decoration: 2px underline white;
        text-underline-offset: 0.25rem;
        color: white;
        font-size: 1em;
    }


    /* right box of the flex */
    .header .header-right{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    /* mobile whatsapp button */
    .header .header-right .whatsapp{
        padding: 0px;
        background-color: #0091ff;
        border: none;
        right: 1rem;
        position: absolute;
    }

    .header .header-right figure{
        margin: 1rem;
        /* on large screen */
        @media only screen and (min-width: 1000px) {
            display: none;
        }
    }

    /* desktop search button whatsapp button */
    .header .header-right .search{
        display: none;
        @media only screen and (min-width: 1000px) {
            display: block;
            padding: 0px;
            background-color: #0091ff;
            border: none;
        }
    }

    .header .header-right .search figure{
        display: none;
        /* on large screen */
        @media only screen and (min-width: 1000px) {
            display: block;
            margin-right: 4rem;
        }
    }
</style>