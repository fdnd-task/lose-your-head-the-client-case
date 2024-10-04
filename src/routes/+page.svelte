<script>
  import {AccessibillityGraph, AutomaticScan, ErrorResult, TypeGraph, Icon} from '$lib'
  export let data = data;
  export let company = data.sites;
  export let result = data.scans[0];
  export let resultsheet = data.scans;
</script>

<header class="wrapper">

</header>

<main class="wrapper main-layout">
  <section class="auto">
    <AutomaticScan {result} />
  </section>
  <ul class="error">
    <ErrorResult {result} {Icon} />
  </ul>

  <section class="type">
    <TypeGraph {result}/>
  </section>


  <AccessibillityGraph {resultsheet}/>
</main>

<footer>
</footer>

<style>
  .wrapper {
    margin: auto;
    max-width: 1100px;
  }

  header {
    height: 10%;
  }

  main {
    display: grid;
    grid-template-columns: 2.2fr 0.8fr; 
    grid-template-rows: 1fr 1fr 1.2fr;   
    gap: 20px;  
    height: 90%;
    margin: 20px auto;
  }
</style>