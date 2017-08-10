export const CommentQueries = `
  Comment(_id: String!): Comment
  allComments: [Comment]
  CommentsByRoute(_id: String): [Comment]
`