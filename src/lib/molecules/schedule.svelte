<script>
    import ProgramCard from "./programCard.svelte";
    export let data;

    // Helper function to get the image source
    function getImageSource(show) {
        // Pakt de koppeltabel van de show
        const programShow = show.mh_shows_id.show

        // Pakt de eerste user op van de show
        const firstUser = programShow && programShow.users && programShow.users[0] && programShow.users[0].mh_users_id && programShow.users[0].mh_users_id.cover;

        // Pakt de thumbnail van de show

        const thumbnail = programShow && programShow.thumbnail && programShow.thumbnail.id;

        // Als de cover niet bestaat of er geen users zijn, gebruik dan de thumbnail van de show
        // Als er geen thumbnail of cover is gebruik een lege string
        return firstUser ? `/${firstUser}` : (thumbnail ? `/${thumbnail}` : '');
    }

    // Helper function to get the show time
    function getShowTime(show) {
        const showId = show.mh_shows_id
        // Haalt de tijden op, als er geen tijden zijn, gebruik dan 00:00
        const from = showId && showId.from ? showId.from : '00:00';
        const until = showId && showId.until ? showId.until : '00:00';

        // Verkleint de tijd van 04:00:00 naar 04:00
        const formattedFrom = from.slice(0, 5);
        const formattedUntil = until.slice(0, 5);

        return `${formattedFrom} - ${formattedUntil}`;
    }

    // Group shows by radio station
    // Group shows by radio station and sort by 'from' time
function groupByRadioStation(shows) {
    const radioStation = {};

    for (const show of shows) {
        const showId = show.mh_shows_id;

        // Get the radio station of the show
        const programShow = showId && showId.show;
        const station = programShow && programShow.radiostation;
        const stationName = station && station.name ? station.name : 'Unknown Station';

        // If the radio station doesn't exist yet, initialize an empty array
        if (!radioStation[stationName]) {
            radioStation[stationName] = [];
        }

        // Add the show to the radio station group
        radioStation[stationName].push(show);
    }

    // Sort each station's shows by 'from' time
    for (const stationName in radioStation) {
        radioStation[stationName].sort((a, b) => {
            const fromA = a.mh_shows_id?.from || '00:00';
            const fromB = b.mh_shows_id?.from || '00:00';

            // Convert 'from' time to a comparable format (HH:MM)
            return fromA.localeCompare(fromB);
        });
    }

    return radioStation;
}

    // Groepeer de shows per radio station (dit is de call)
    const groupedShows = groupByRadioStation((data && data.data && data.data[0] && data.data[0].shows) || []);
</script>

<div class="schedule">
    {#if Object.keys(groupedShows).length > 0}
        {#each Object.entries(groupedShows) as [stationName, stationShows]}
            <div class="schedule__radio-station-row">
                <!-- <h2>{stationName}</h2> -->
                <div class="schedule__station-shows">
                    {#each stationShows as show, i}
                        <ProgramCard
                            programName={show.mh_shows_id && show.mh_shows_id.show && show.mh_shows_id.show.name || 'Onbekende programma'}
                            time={getShowTime(show)}
                            imgSrc={getImageSource(show)}
                            programLink={`/shows/${show.id}`}
                            i={i}
                        />
                    {/each}
                </div>
            </div>
        {/each}
    {:else}
        <p>Er zijn geen programma's</p>
    {/if}
</div>

<style>
    .schedule {
        display: grid;
        grid-gap: 1em;
        overflow: scroll;
        padding: 2rem;
    }

    .schedule__station-shows {
        display: grid;
        grid-template-columns: repeat(calc(2359 / 2.001953), 3px);
     }
</style>
