import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd-agency.directus.app/items/frd_site';

  const response = await fetchJson(url)
  
  return {
    scans: response.data,
  }
}