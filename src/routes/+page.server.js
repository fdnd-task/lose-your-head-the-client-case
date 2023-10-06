import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
    query Homepage {
        homepages {
            header {
                aboutLink
                promiseLink
                inkLogo {
                url
                }
                becomeSponsorLink
            }
            introMain {
                title
                bgVideo {
                url
                }
            }
            mainIntroAboutUs {
                introTextAbout
                aboutUsLink
            }
            }
        }
    `

    return await hygraph.request(query)
}
