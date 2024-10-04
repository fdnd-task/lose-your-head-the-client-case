<script>
  import {AccessibillityGraph, AutomaticScan, ErrorResult, TypeGraph} from '$lib'
  export let data = data;
  export let company = data.sites;
  export let result = data.scans[0];
  export let resultsheet = data.scans;
</script>


<header class="wrapper header-layout">

</header>

<main class="wrapper main-layout">
  <section class="auto">
    <AutomaticScan {result} />
  </section>
  <ul class="error">
    <ErrorResult {result} />
  </ul>

  <section class="type">
    <TypeGraph {result}/>
  </section>

  <section class="accessibillity">
    <AccessibillityGraph {resultsheet}/>
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
  border-radius: var(--section-border-radius);
  box-shadow: var(--box-shadow);
  padding: var(--average-padding);
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