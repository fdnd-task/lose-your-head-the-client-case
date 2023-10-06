import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
    query Homepage {
        homepages {
            headTitle
            bgContentVideo {
                    url
                }
            }
        }
    `

    return await hygraph.request(query)
}
