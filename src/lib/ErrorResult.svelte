<script>
    export let data;
    export let result = data.scans;
</script>

{#each result.result as result}
  <li>
    <h3>{result.title}</h3>
    <p>{result.amount}</p>
  </li>
{/each}

<style>
    li{
        height: 20%;
        background-color: var(--color-background-section);
        border-radius: 8px;
        box-shadow: 0px 0px 9px -2px var(--color-black);
        list-style: none;
    }
</style>