import { merge } from 'lodash'

import { RockRouteResolver } from './graph/rockRoute/resolver'
import { UserResolver } from './graph/user/resolver'
import { CommentResolver } from './graph/comment/resolver'

export default merge(
  RockRouteResolver,
  UserResolver,
  CommentResolver
)