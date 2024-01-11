const typeDefs = `
  type User {
    _id: ID
    name: String
  }

  type Query {
    Users: [User]!
    User(userId: ID!): User
  }

  type Mutation {
    addUser(name: String!): User
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
