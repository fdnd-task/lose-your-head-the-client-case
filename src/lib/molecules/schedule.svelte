<script>
  // components imports
  import ProgramCard from "../molecules/programcard.svelte";
  import ScheduleTimes from "../atoms/schedule-times.svelte";

  // General imports
  import { onMount } from "svelte";

  // data import
  export let data;

  function getImageSource(show) {
    const programShow = show.mh_shows_id.show;

    // Pakt de eerste user op van de show
    const firstUser =
      programShow &&
      programShow.users &&
      programShow.users[0] &&
      programShow.users[0].mh_users_id &&
      programShow.users[0].mh_users_id.cover;

    // Pakt de thumbnail van de show

    const thumbnail =
      programShow && programShow.thumbnail && programShow.thumbnail.id;

    // Als de cover niet bestaat of er geen users zijn, gebruik dan de thumbnail van de show
    // Als er geen thumbnail of cover is gebruik een lege string
    return firstUser ? `/${firstUser}` : thumbnail ? `/${thumbnail}` : "";
  }

  // Helper function to get the show time
  function getShowTime(show) {
    const showId = show.mh_shows_id;
    // Haalt de tijden op, als er geen tijden zijn, gebruik dan 00:00
    const from = showId && showId.from ? showId.from : "00:00";
    const until = showId && showId.until ? showId.until : "00:00";

    // Verkleint de tijd van 04:00:00 naar 04:00
    const formattedFrom = from.slice(0, 5);
    const formattedUntil = until.slice(0, 5);

    return `${formattedFrom} - ${formattedUntil}`;
  }

  // groepeer de radio stations
  function groupByRadioStation(shows) {
    const radioStation = {};

    for (const show of shows) {
      const showId = show.mh_shows_id;

      const programShow = showId && showId.show;
      const station = programShow && programShow.radiostation;
      const stationName = station && station.name;
      const stationImage = station && station.logo && station.logo.id;

      if (!radioStation[stationName]) {
        radioStation[stationName] = [];
      }

      radioStation[stationName].push(show);
    }

    // Sort each station's shows by 'from' time
    for (const stationName in radioStation) {
      radioStation[stationName].sort((a, b) => {
        const fromA = a.mh_shows_id?.from || "00:00";
        const fromB = b.mh_shows_id?.from || "00:00";
        return fromA.localeCompare(fromB);
      });
    }

    return radioStation;
  }

  // Groepeer de shows per radio station (dit is de call)
  const groupedShows = groupByRadioStation(
    (data && data.data && data.data[0] && data.data[0].shows) || [],
  );

  const updateScheduleLine = () => {
    const date = new Date();
    const minutes = (100 / 60) * date.getMinutes();
    const timeValue = date.getHours() * 100 + minutes;

    const totalColumns = Math.floor(2359 / 2.001953);
    const gridPosition = (timeValue / 2359) * totalColumns * 3;

    const line = document.querySelector(".schedule-line");
    if (line) {
      line.style.setProperty("--timepassed", `${gridPosition}px`);
      line.style.display = "block";

      // TODO: laat nog geen goeie tijd zien wat het daadwerkelijk is

      // const lineSpan = line.querySelector("span");
      // if (lineSpan) {
      //   lineSpan.innerHTML = timeValue;
      // }
    }
  };

  onMount(() => {
    updateScheduleLine();
    setInterval(updateScheduleLine, 1000);
  });
</script>

<div class="schedule">
  <div class="schedule-line"><span>now</span></div>
  <ScheduleTimes />
  {#if Object.keys(groupedShows).length > 0}
    {#each Object.entries(groupedShows) as [stationName, stationShows]}
      <div class="schedule__radio-station-row">
        <div class="schedule__station-logo">
          {#if stationShows.length > 0}
            <img
              src={`https://fdnd-agency.directus.app/assets/${stationShows[0].mh_shows_id?.show?.radiostation?.logo?.id}`}
              alt={stationName}
            />
          {/if}
        </div>

        <div class="schedule__station-shows">
          {#each stationShows as show, i}
            <ProgramCard
              programName={show.mh_shows_id?.show?.name || "Unknown Program"}
              time={getShowTime(show)}
              imgSrc={getImageSource(show)}
              programLink={`/`}
            />
          {/each}
        </div>
      </div>
    {/each}
  {:else}
    <p>No programs available</p>
  {/if}
</div>

<style>
  .schedule {
    display: grid;
    grid-gap: 1em;
    overflow: scroll;
    padding: 1rem;
    position: relative;
  }

  .schedule-line {
    display: none;
    --timepassed: 0px;
    left: calc(150px + var(--timepassed));
    top: 2rem;
    position: absolute;
    height: calc(100% - 3.5rem);
    width: 2px;
    background-color: #0091ff;
    border-radius: 999999px;
  }

  .schedule-line::after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #0091ff;
  }

  .schedule-line span {
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    color: #0091ff;
  }

  .schedule__radio-station-row {
    display: flex;
    align-items: center;
  }

  .schedule__station-shows {
    display: grid;
    grid-template-columns: repeat(calc(2359 / 2.001953), 3px);
  }

  img {
    width: 100px;
    height: 100px;
    margin-right: 1rem;
    padding: 20px;
  }

  @media (min-width: 40em) {
    .schedule {
      padding: 2rem;
    }
  }

  @media (prefers-reduced-motion) {
    .schedule-line {
      display: none !important;
    }
  }
</style>
