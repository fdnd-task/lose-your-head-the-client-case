<script>
import Tabmenu_link from '../atoms/Tabmenu_link.svelte';
</script>

<ul>
    <Tabmenu_link label="home" icon="home"/>
    <Tabmenu_link label="ontdek" icon="ontdek"/>
    <Tabmenu_link label="radio" icon="radio"/>
    <Tabmenu_link label="meer" icon="meer"/>
</ul>

<style>
    ul{
        border-top: 1px solid #EDEDED;
        background-color: var(--light);
        width: 100%;
        padding: 1em 0em;
        display: flex;
        width: 100%;
    }
</style>