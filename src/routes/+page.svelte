<script>
    import Schedule from "../lib/molecules/schedule.svelte";
    import WeekSelectie from '../lib/molecules/WeekSelectie.svelte';
  
    export let data;
</script>

<main>
    <WeekSelectie/>
    <Schedule {data}/>
</main>
