<script>
    import Schedule from "../lib/guide/schedule.svelte";
    import WeekSelectie from '../lib/WeekSelectie/WeekSelectie.svelte';
  
    export let data;
</script>

<main>
    <WeekSelectie/>
    <Schedule {data}/>
</main>
