import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

const Query = `
  type Query {
    version: String
  }
`

export default makeExecutableSchema(({
  typeDefs: [
    Query
  ]

}))