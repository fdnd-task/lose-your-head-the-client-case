import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
        query AboutQuery {
            aboutPages {
                aboutIntro {
                    title
                    subTitle
                    contentImg {
                        url
                    }
                    aboutInfo
                    aboutInfo2
                }
            }
        }
    ` 

    return await hygraph.request(query)
}