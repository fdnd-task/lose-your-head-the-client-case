<script>
  export let data
</script>

{#each data.quotes as quote }
<blockquote>
  <p>{quote.text}</p>
  <cite>{quote.author}</cite>
</blockquote>
{/each}

<style>
  blockquote {
    color: hotpink;
  }
  cite {
    color: dodgerblue;
  }
  blockquote + blockquote {
    margin-top: 3rem;
  }
</style>
