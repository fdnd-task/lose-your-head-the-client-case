<script>
  import {AccessibillityGraph, AutomaticScan, ErrorResult, TypeGraph} from '$lib'
  export let data = data;
  export let company = data.sites;
  export let scans = data.scans[0];

</script>


<header class="wrapper header-layout">

</header>

<main class="wrapper main-layout">
  <section class="auto">
    <AutomaticScan {scans} />
  </section>
  <ul class="error">
    <ErrorResult {scans} />
  </ul>

  <section class="type">
    <TypeGraph />
  </section>

  <section class="accessibillity">
    <AccessibillityGraph />
  </section>
</main>

<footer>
</footer>

<style>
 .wrapper{
    margin: auto;
    max-width: 1100px;
 }

 .header-layout{
  height: 10%;
 }

 .main-layout{
  display: grid;
  grid-template-columns: 2.2fr 0.8fr; 
  grid-template-rows: 1fr 1fr 1.2fr;   
  gap: 20px;  
  height: 90%;
  margin: 20px auto;
 }

 section{
  background-color: var(--color-background-section);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 30px;
 }

 .auto{
  grid-area: 1 / 1 / 2 / 2;       
 }

 .error{
  grid-area: 1 / 2 / 3 / 3;   
  display: flex;
  flex-direction: column; 
  row-gap: 20px;
 }

 .type{
  grid-area: 2 / 1 / 3 / 2;     
 }

 .accessibillity{
  grid-area: 3 / 1 / 4 / 3;
 }


 
</style>