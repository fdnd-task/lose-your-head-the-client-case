<script>
  export let ChapterContentLeft;
  export let ChapterContentRight;
</script>

<section id="Main-content">
  <h2>{ChapterContentLeft}</h2>
  <!-- svelte-ignore a11y-missing-attribute -->
</section>

<style>
  #Main-content {
    padding: 2rem 5rem;
    height: auto;
    background-color: white;
  }
</style>
