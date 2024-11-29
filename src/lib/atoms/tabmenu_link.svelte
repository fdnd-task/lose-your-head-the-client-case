

<script>
  export let label = ""; // Changes the label text
  export let href = "#"; // Changes the href
  export let title = ""; // Changes the alt text
  export let onclick;

  
</script>

    <a class="tabmenu_link" {href} {title} on:click={onclick}>
        <div>
            {#if label == 'home'}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_171_3265)"><path d="M12.01 3L3 9.66234V22H9V15.0909H15V22H21V9.66234L12.01 3Z" /></g><defs><clipPath id="clip0_171_3265"><rect width="18" height="19" fill="white" transform="translate(3 3)"/></clipPath></defs></svg> 
            {:else if label == 'ontdek'}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5H20.297V7.00376H2V5ZM2 11.0113H7.4739V13.015H2V11.0113ZM7.46376 17.0225H2V19.0263H7.46376V17.0225ZM20.2768 15.0269C20.2768 16.149 19.922 17.221 19.2428 18.1327L22 20.8578L20.8444 22L18.0872 19.2749C17.1647 19.9461 16.0902 20.2968 14.9448 20.2968C12.0051 20.2968 9.61279 17.9323 9.61279 15.0269C9.61279 12.1215 12.0051 9.75702 14.9448 9.75702C17.8845 9.75702 20.2768 12.1215 20.2768 15.0269ZM11.2448 15.0269C11.2448 17.0407 12.9073 18.6838 14.9448 18.6838C16.9823 18.6838 18.6447 17.0407 18.6447 15.0269C18.6447 13.0131 16.9823 11.37 14.9448 11.37C12.9073 11.37 11.2448 13.0131 11.2448 15.0269Z" fill="currentcolor"/></svg>
            {:else if label == 'radio'}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.78 7L9.21 3.85L9.98 2L11.83 2.77L17.36 5.08L19.21 5.85L21.98 7H22V22H2V7H16.78ZM4.17 20H19.83L20 9H4L4.17 20ZM17.82 14.57C17.82 16.65 16.13 18.35 14.04 18.35C11.96 18.35 10.26 16.65 10.26 14.57C10.26 12.49 11.96 10.79 14.04 10.79C16.12 10.79 17.82 12.49 17.82 14.57ZM16.1 14.57C16.1 13.43 15.18 12.51 14.04 12.51C12.9 12.51 11.98 13.43 11.98 14.57C11.98 15.71 12.9 16.63 14.04 16.63C15.18 16.63 16.1 15.71 16.1 14.57ZM8.38 11.72H6.38V13.72H8.38V11.72ZM6.38 15.72H8.38V17.72H6.38V15.72Z" fill="currentcolor"/></svg>
            {:else if label == 'meer'}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><g id="Icons/Interaction/Meer"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M1 14V10V9H2H6H7V15H6H2H1V14ZM9 10V14V15H10H14H15V9H14H10H9V10ZM18 9H17V10V15H18H22H23V14V9H22H18ZM3 11H5V13H3V11ZM13 11H11V13H13V11ZM19 11H21V13H19V11Z" fill="currentcolor"/></g></svg>
            {/if}
        </div>
        <span>{label}</span>
    </a>

<style>
    a{
        padding: 2em 0em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        align-items: center;
        color: var(--grey);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3vw;
        font-family: var(--font-family);

    }

     a:focus, a:active, a:hover{
        transform: scale(102%);
        transition: ease-in 0.3s;
    }

    @media only screen and (min-width: 500px) {
        a {
            font-size: 16px;
        }
    }

    a:focus, 
    a:active , a:hover {
        color: var(--primary-color);
    }

    a:focus svg,
    a:active svg ,
    a:hover svg {
        fill: var(--primary-color);
    }

    a svg {
        width: 9vw;
        fill: var(--grey);
    }

    @media only screen and (min-width: 500px) {
        a svg {
            width: 34px;
        }
    }

    @media only screen and (min-width: 960px) {
        a {
            display: none;
        }
    }
</style>
