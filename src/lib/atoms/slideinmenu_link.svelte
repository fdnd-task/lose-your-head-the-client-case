<script>
  export let label = ""; // Changes the label text
  export let sublabel =""
  export let href = "#"; // Changes the href
  export let title = ""; // Changes the alt text
</script>

<li>
    <a {title} {href}>
        <div>
            <span>
                {label}
            </span>
            <span>
                {sublabel}
            </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
    </a>
</li>


<style>
    li{
        border-bottom: 2px solid #EDEDED;
    }
    a{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1em 1em;
        color: var(--dark);
        
    }

    svg{
        transition: ease-out 0.3s;
    }

    a div{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    a div span:nth-child(1){
        font-weight: 600;
        font-size: 1.1em;
    }

    a:hover ,  a:active , a:focus , li:hover , li:focus{
        color: var(--primary-color);
    }

    a:focus> svg{
        margin-right: -4px;
        transition: ease-out 0.3s;
        transform: scale(125%);
    }

    @media (prefers-reduced-motion: reduce) {
        a, svg {
        transition: none;
        transform: none;
        }
        a:focus{
        transition: none;
        transform: none;
    }
    } 

  /* toegankelijkheid Kleuren */
  @media (prefers-contrast: more) {
    a {
      color: var(--dark);
    }
    li span:nth-of-type(2) {
        display: none; /* Hide the second span */
    }
}
  

</style>