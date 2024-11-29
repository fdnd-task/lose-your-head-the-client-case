import fetchJson from "$lib/fetch-json";

export async function load() {
  const API = 'https://fdnd-agency.directus.app/items/';
  const day = `${API}mh_day`;

  const date = "2024-10-07"

  const filter = `?filter[date]=${date}&sort=shows.mh_shows_id.from&fields=
    shows.mh_shows_id.show.name,
    shows.id,shows.mh_shows_id.show.id,
    shows.mh_shows_id.show.radiostation.name,
    shows.mh_shows_id.show.radiostation.id,
    shows.mh_shows_id.show.radiostation.logo.id,
    shows.mh_shows_id.show.users.id,
    shows.mh_shows_id.show.users.mh_users_id.full_name,
    shows.mh_shows_id.show.users.mh_users_id.cover,
    shows.mh_shows_id.from,shows.mh_shows_id.until,
    shows.mh_shows_id.show.body,shows.mh_shows_id.show.thumbnail.id,
    shows.mh_shows_id.show.headermobile.id,
    shows.mh_shows_id.show.headerdesktop.id`;

  // Fetch the data from the API
  const data = await fetchJson(day + filter);

  return {
    data: data.data
  };
}
