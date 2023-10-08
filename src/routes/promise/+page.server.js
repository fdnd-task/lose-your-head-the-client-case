import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
        query PromiseQuery {
            promisePages {
                promiseIntro {
                    title
                    contentImg {
                        url
                    }
                    contentText
                    contentText2
                }
                promiseMain {
                    title
                    contentText
                    imgContent {
                        url
                    }
                }
            }
        }
    ` 

    return await hygraph.request(query)
}