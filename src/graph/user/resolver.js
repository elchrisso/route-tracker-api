import { id as ObjectId } from 'monk'
import db from '../../db/index'

const users = db.get('User')

export const UserResolver = {
  Query: {
    async User (_obj, args, context, info) {
      try {
        return await users.findOne(ObjectId(args._id))
      } catch (e) {
        throw e
      }
    }
  }
}