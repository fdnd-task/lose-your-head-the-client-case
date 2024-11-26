<script>
import Tabmenu_link from '../atoms/Tabmenu_link.svelte';

import { onMount } from 'svelte';
    let isSubnavOpen = false;

    // Function to handle click and toggle class
    function handleClick() {
        isSubnavOpen = !isSubnavOpen;
    }

    // Optionally, you can use onMount for any DOM manipulations needed
    onMount(() => {
        console.log('Component mounted');
    });

</script>

<ul>
    <li><Tabmenu_link label="home" icon="home"/></li>
    <li><Tabmenu_link label="ontdek" icon="ontdek"/></li>
    <li><Tabmenu_link label="radio" icon="radio"/></li>
    <li><Tabmenu_link label="meer" icon="meer" on:click={handleClick} href="javascript:void(0)"/></li>
</ul>

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