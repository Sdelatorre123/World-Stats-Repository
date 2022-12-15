const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
  }

  type Comments {
    _id: ID
  }

  type Forums {
    _id: ID
  }

  type Team {
    _id: Id
    name: String
  }

  type Query {
    user: [User]
    team: Team
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
`;

module.exports = typeDefs;