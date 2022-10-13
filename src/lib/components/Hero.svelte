<script>
  export let heroTitle;
</script>

<section>
  <h2>{heroTitle}</h2>
  <p class="intro">
    De beoogde leerresultaten passen bij het niveau en de oriëntatie van de
    opleiding en zijn afgestemd op de verwachtingen van het beroepenveld en het
    vakgebied en op internationale eisen.
  </p>
</section>

<style>
  .intro {
    color: #eeeeee;
  }
  section {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("https://cmd-mid-term.netlify.app/assets/images/detail-hero-image.jpg");
    background-size: cover;
    background-position: center;
    height: 15rem;
    color: #fff021;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 5rem;
  }
</style>
