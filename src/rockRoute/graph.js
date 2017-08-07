export const RockRoute = `
  type RockRoute {
    _id: String!
    name: String!
  }
`

export const RockRouteQueries = `
  RockRoute(_id: String!): Spell
  allRockRoutes: [RockRoute]
`