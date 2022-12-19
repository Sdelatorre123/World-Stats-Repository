const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String
    favoriteTeam: Team
  }

  type Thread {
    _id: ID
    threadText: String
    threadAuthor: String
    createdAt: String
  }

  type Comments {
    _id: ID
  }

  type Forums {
    _id: ID
  }

  type Team {
    _id: ID
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]
    team: Team
    thread: Thread
    forums: Forums
    comments: [Comments]

  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThread(threadText: String!, threadAuthor: String!): Thread
  }
`;

module.exports = typeDefs;