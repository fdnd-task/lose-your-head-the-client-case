import { client } from '$lib/utils/client'
import getQueryProgram from '$lib/queries/partner'

export const load = async () => {
    const queryProgram = getQueryProgram()

    const data = await client({ query: queryProgram, fetch: fetch, endpoint: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0zp4u2fkz01uj486xdza4/master'})

    return {
        ...data.websites
    }
}