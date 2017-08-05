import { makeExecutableSchema } from 'graphql-tools'

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