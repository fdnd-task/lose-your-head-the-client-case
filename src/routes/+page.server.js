import fetchJson from "$lib/fetch-json"

export async function load() {
  const urlSites = 'https://fdnd-agency.directus.app/items/frd_site';
  const urlScans = 'https://fdnd-agency.directus.app/items/frd_scans';

  const sites = await fetchJson(urlSites)
  const scans = await fetchJson(urlScans)
  
  return {
    sites : sites.data,
    scans : scans.data
  }
}