const typeDefs = `
  type User {
    _id: ID
    name: String
    skills: [String]!
  }

  type Query {
    Users: [User]!
    User(userId: ID!): User
  }

  type Mutation {
    addUser(name: String!): User
    addSkill(userId: ID!, skill: String!): User
    removeUser(userId: ID!): User
    removeSkill(userId: ID!, skill: String!): User
  }
`;

module.exports = typeDefs;
