<script>
import Tabmenu_link from '../atoms/Tabmenu_link.svelte';
import Slideinmenu from "../molecules/slideinmenu.svelte";

let menuVisible = false;

function toggleMenu() {
    menuVisible = !menuVisible;
}
</script>



<ul>
    <li><Tabmenu_link label="home" /></li>
    <li><Tabmenu_link label="ontdek"/></li>
    <li><Tabmenu_link label="radio"/></li>
    <li><Tabmenu_link label="meer" onclick={toggleMenu} href="#"/></li>
</ul>

<Slideinmenu {menuVisible}/>

<style>
    li{
        width: 25%;
    }
    ul{
        border-top: 1px solid #EDEDED;
        background-color: var(--light);
        width: 100%;
        padding: 1em 0em;
        display: flex;
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 99;
    }
</style>