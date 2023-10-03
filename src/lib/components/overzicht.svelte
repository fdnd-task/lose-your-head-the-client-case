<script>
    export let data
    
    import logoPartner from '$lib/assets/gvb.png'
</script>

<ul>
    {#each data.websites as website}
    <li>
        <section>
            <img src={logoPartner} alt="logo partner">
            <h2>{website.titel}</h2>
        </section>
        <span>{website.homepage}</span>
    </li>
    {/each}
</ul>

<style>
    ul{
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75em;
    }

    li{
        background-color: var(--c-container);
        padding: 1em;
        border-radius: 0.5em;
        border: solid 1px var(--c-container-stroke);
        min-width: 20em;
    }

    h2{
        font-size: 1.5em;
    }
</style>