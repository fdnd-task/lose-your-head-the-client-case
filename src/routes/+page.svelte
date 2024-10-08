<script>
    import ProgramCard from "../lib/button/programCard.svelte";
    export let data;

    // Helper function to get the image source
    function getImageSource(show) {
        // Pakt de koppeltabel van de show
        const programShow = show.mh_shows_id.show

        // Pakt de eerste user op van de show
        const firstUser = programShow && programShow.users && programShow.users[0] && programShow.users[0].mh_users_id && programShow.users[0].mh_users_id.cover;

        // Pakt de thumbnail van de show

        const thumbnail = programShow && programShow.thumbnail && programShow.thumbnail.id;
        console.log(thumbnail);

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
    function groupByRadioStation(shows) {
        const radioStation = {};

        for (const show of shows) {
            const showId = show.mh_shows_id;

            // Pakt de radio station van de show
            const programShow = showId && showId.show;
            const station = programShow && programShow.radiostation;
            const stationName = station && station.name ? station.name : 'Unknown Station';

            // Als de radio station nog niet bestaat, maak dan een lege array aan
            if (!radioStation[stationName]) {
                radioStation[stationName] = [];
            }

            // Voeg de show toe aan de radio station groep
            radioStation[stationName].push(show);
        }
        return radioStation;
    }

    // Groepeer de shows per radio station (dit is de call)
    const groupedShows = groupByRadioStation((data && data.data && data.data[0] && data.data[0].shows) || []);
</script>

<main>
    <h1>Program List by Radio Station</h1>

    <div class="schedule">
        {#if Object.keys(groupedShows).length > 0}
            {#each Object.entries(groupedShows) as [stationName, stationShows]}
                <div class="radio-station-row">
                    <h2>{stationName}</h2>
                    <div class="station-shows">
                        {#each stationShows as show}
                            <ProgramCard
                                programName={show.mh_shows_id && show.mh_shows_id.show && show.mh_shows_id.show.name || 'Onbekende programma'}
                                time={getShowTime(show)}
                                imgSrc={getImageSource(show)}
                                programLink={`/shows/${show.id}`}
                            />
                        {/each}
                    </div>
                </div>
            {/each}
        {:else}
            <p>No shows available.</p>
        {/if}
    </div>

    <style>
        .schedule {
            display: grid;
            grid-gap: 1em;

        }

        .radio-station-row {
            grid-column: track-1-start / track-4-end;
        }

        .station-shows {
            display: flex;
            gap: 2rem;
        }

        .program-grid {
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
            overflow-y: auto;
        }

    </style>
</main>
