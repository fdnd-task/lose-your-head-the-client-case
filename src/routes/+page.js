import fetchJson from "$lib/fetch-json";

export async function load() {
  const API = 'https://fdnd-agency.directus.app/items/';
  const day = `${API}mh_day`;

  const date = "2024-10-08"; // Get the date from the URL

  // Fetch data for the specific date
  const filter = `?filter[date]=${date}&sort=shows.mh_shows_id.from&fields=shows.mh_shows_id.show.name,shows.id,shows.mh_shows_id.show.id,shows.mh_shows_id.show.radiostation.name,shows.mh_shows_id.show.radiostation.id,shows.mh_shows_id.show.users.id,shows.mh_shows_id.show.users.mh_users_id.full_name,shows.mh_shows_id.show.users.mh_users_id.cover,shows.mh_shows_id.from,shows.mh_shows_id.until,shows.mh_shows_id.show.body,shows.mh_shows_id.show.thumbnail.id,shows.mh_shows_id.show.headermobile.id,shows.mh_shows_id.show.headerdesktop.id`;
//   Add sort

  // Fetch the data from the API
  const data = await fetchJson(day + filter);

  console.log(day + filter)

  // Update this log to print the full object
console.log("Fetched data:", JSON.stringify(data.data, null, 2));

  return {
    data: data.data  // Pass the data to the component
  };
}
