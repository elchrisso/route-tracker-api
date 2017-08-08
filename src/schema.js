import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

import  { RockRoute, RockRouteQueries } from './rockRoute/graph'

const Query = `
  type Query {
    ${RockRouteQueries}
  }
`

export default makeExecutableSchema(({
  typeDefs: [
    Query,
    RockRoute
  ],
  resolvers

}))