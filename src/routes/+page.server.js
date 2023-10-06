import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
    query MyQuery {
        homepages {
            header {
                inkLogo {
                url
                }
            }
            introMain {
                title
            }
            }
        }
    `

    return await hygraph.request(query)
}
