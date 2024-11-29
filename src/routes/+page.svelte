<script>
    import Tabs from '../lib/molecules/tabs.svelte';
    import Schedule from "../lib/molecules/schedule.svelte";
    import WeekSelectie from '../lib/molecules/WeekSelectie.svelte';
    import Radioplayer from '../lib/organism/Radioplayer.svelte';

    export let data;
</script>

<main>
    <WeekSelectie/>
    <Schedule {data}/> 
    <Radioplayer />
</main>

<style>

</style>
