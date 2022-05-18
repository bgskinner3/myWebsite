const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload
  scalar Date
  type File {
    url: String!
  }
  type ToDos {
    id: ID
    completed: Boolean
    content: String
    importance: Importance
    createdAt: Date
  }
  type Reactos {
    question: String
    markdownnumber: String
    completed: Boolean
    answer: String
    title: String
  }
  type Post {
    id: ID!
    content: String!
    title: String!
    image: String
    subject: String
    createdAt: Date
    comments: [Comment]
    referance: [Referance]
  }
  type Message {
    id: ID!
    content: String
    read: Read
    email: String
  }
  type Referance {
    id: ID!
    url: String
  }
  type Comment {
    id: ID!
    content: String
    postId: ID!
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
    messages: [Message!]!
    message(id: ID!): Message!
    comments: [Comment!]!
    comment(id: ID!): Comment!
    referances: [Referance!]!
    referance(id: ID!): Referance!
    reacto(id: ID!): Reactos!
    reactos: [Reactos]!
    todo(id: ID!): ToDos
    todos: [ToDos!]!
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
  input CreateCommentInput {
    content: String
    postId: ID!
  }
  input CreateMessageInput {
    content: String
    read: Read
    email: String
  }
  input CreateReferanceInput {
    url: String
    postId: ID!
  }
  input UpdateMessageInput {
    id: ID!
    read: Read
  }
  input CreateToDoInput {
    content: String
    importance: Importance
  }
  input UpdateToDoInput {
    id: ID!
    completed: Boolean
    content: String
    importance: Importance
  }
  input CreateReactoInput {
    question: String
    markdownnumber: String
    completed: Boolean
    answer: String
    title: String
  }
  input UpdateReactoInput {
    id: ID!
    question: String
    markdownnumber: String
    completed: Boolean
    answer: String
    title: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
    updatePost(input: UpdatePostInput!): Post!
    deletePost(id: ID!): Post
    login(username: String!, password: String!): AuthPayload!
    uploadFile(file: Upload!): File!
    createComment(input: CreateCommentInput!): Comment
    createMessage(input: CreateMessageInput!): Message
    createReferance(input: CreateReferanceInput!): Referance
    updateMessage(input: UpdateMessageInput!): Message!
    createReacto(input: CreateReactoInput!): Reactos
    updateReacto(input: UpdateReactoInput!): Reactos!
    createToDo(input: CreateToDoInput!): ToDos
    updateToDo(input: UpdateToDoInput!): ToDos!
    deleteToDo(id: ID!): ToDos
  }
  enum Read {
    no
    yes
    save
  }
  enum Importance {
    urgent
    taketime
    moderate
  }
`;

module.exports = { typeDefs };
