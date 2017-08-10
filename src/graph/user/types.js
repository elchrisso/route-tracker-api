export const User = `
  type User {
    _id: String!
    email: String!
    password: String!
    comments: [Comment!]!
  }
`