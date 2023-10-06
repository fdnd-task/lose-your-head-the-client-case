import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
        query HomeQuery {
            homepages {
                introMain {
                    title
                    bgVideo {
                        url
                    }
                }
            }
        }
    `

    return await hygraph.request(query)
}
