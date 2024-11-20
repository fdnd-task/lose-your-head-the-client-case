<script>
    import Schedule from "../lib/molecules/schedule.svelte";
    import WeekSelectie from '../lib/molecules/WeekSelectie.svelte';
    import Tabmenu_link from '../lib/atoms/Tabmenu_link.svelte';
    export let data;
</script>

<main>
    <WeekSelectie/>
    <Schedule {data}/> 
</main>
