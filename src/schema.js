import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

import  { RockRouteQueries } from './graph/rockRoute/queries'
import { CommentQueries } from './graph/comment/queries'
import { UserQueries } from './graph/user/queries'

import { RockRoute } from './graph/rockRoute/types'
import { Comment } from './graph/comment/types'
import { User } from './graph/user/types'

const Query = `
  type Query {
    ${RockRouteQueries}
    ${CommentQueries}
    ${UserQueries}
  }
`

export default makeExecutableSchema(({
  typeDefs: [
    Query,
    RockRoute,
    Comment,
    User
  ],
  resolvers
}))