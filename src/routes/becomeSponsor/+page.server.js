import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
    query SponsorQuery {
            sponsorPages {
                sponsorMain {
                    title
                    subTextSponsor
                    titleSponsorOption
                    textSponsorOption
                    titleSponsorOption2
                    textSponsorOption2
                    titleSponsorOption3
                    textSponsorOption3
                }
            }
        }
    `
    return await hygraph.request(query)
}
