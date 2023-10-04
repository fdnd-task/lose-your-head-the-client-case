import { HYGRAPH_KEY, HYGRAPH_PERFORMANCE_URL } from '$env/static/private'

import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(HYGRAPH_PERFORMANCE_URL)
