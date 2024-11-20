<script>
    import Tabmenu from '../lib/molecules/Tabmenu.svelte';
    import Schedule from "../lib/molecules/schedule.svelte";
    import WeekSelectie from '../lib/molecules/WeekSelectie.svelte';
 
    export let data;
</script>

<main>
    <WeekSelectie/>
    <Schedule {data}/> 
    <Tabmenu/>
</main>
