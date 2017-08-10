import { id as ObjectId } from 'monk'
import db from '../../db/index'

const comments = db.get('Comment')

export const CommentResolver = {
  Query: {
    async Comment (_obj, args, contect, _info) {
      try {
        return await comments.findOne(ObjectId(args._id))
      } catch (e) {
        throw e
      }
    }
  }
}