export const RockRoute = `
  type RockRoute {
    _id: String!
    name: String!
    comments: [Comment!]!
    description: String
    grade: String
    sent: Boolean
    style: String!
  }
`