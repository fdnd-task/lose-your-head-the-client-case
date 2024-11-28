<script>
  import ProgressBar from '../../atoms/radioplayerAtoms/progress-bar.svelte';
</script>


<li class="song__progress">
  <p>00:00</p>
  <ProgressBar />
  <p>02:50</p>
</li>


<style>
  .song__progress {
    display: flex;
    flex-direction: row;
    gap: 0.3em;
    align-items: center;
    font-family: "BrutalType";
    font-weight: 900;

    @media only screen and (min-width: 320px) and (max-width: 980px){
            display: none;
        }
      }
</style>