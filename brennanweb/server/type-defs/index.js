const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload
  scalar Date
  type File {
    url: String!
  }
  type Post {
    id: ID!
    content: String!
    title: String!
    image: String
    subject: String
    createdAt: Date
  }
  type User {
    id: ID!
    username: String!
    password: String
  }
  type Query {
    posts: [Post!]!
    post(id: ID!): Post!
    users: [User!]!
    user(token: String!): User!
  }
  input UserInput {
    username: String!
    password: String!
  }
  input CreateUserInput {
    username: String!
    password: String!
    profileImg: String
  }
  input UpdatePostInput {
    id: ID!
    title: String
    content: String
    image: String
    subject: String
  }
  input CreatePostInput {
    title: String!
    content: String!
    image: String
    subject: String
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type Mutation {
    createPost(input: CreatePostInput!): Post
    updatePost(input: UpdatePostInput!): Post!
    deletePost(id: ID!): Post
    login(username: String!, password: String!): AuthPayload!
    uploadFile(file: Upload!): File!
  }
`;

module.exports = { typeDefs };
