import { id as ObjectId } from 'monk'
import db from '../db'

const rockRoutes = db.get('RockRoute')

export const RockRouteResolver = {
  Query: {
    async RockRoute (_obj, args, context, _info) {
      try {
        return await rockRoutes.findOne(ObjectId(args._id))
      } catch (e) {
        throw e
      }
    }
  }
}