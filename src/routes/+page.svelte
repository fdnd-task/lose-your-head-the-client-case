<script>
  import {AccessibillityGraph, AutomaticScan, ErrorResult, TypeGraph} from '$lib'
  export let data = data;
  export let company = data.sites;
  export let scans = data.scans;
</script>

<header>

</header>
<main>
  <section>
    <AutomaticScan />
  </section>
  <ul>
    <ErrorResult />
  </ul>

  <section>
    <TypeGraph />
  </section>

  <section>
    <AccessibillityGraph />
  </section>
</main>

<footer>
</footer>

<style>
</style>