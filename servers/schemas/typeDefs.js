<<<<<<< HEAD
const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }


  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
=======
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    category: Category
  }

  type Order {
    id: ID!
    products: [Product]!
    total: Float!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    orders: [Order]
  }

  type Query {
    categories: [Category]
    products: [Product]
    orders: [Order]
    users: [User]
  }

  type Mutation {
    addCategory(name: String!): Category
    addProduct(name: String!, price: Float!, categoryId: ID!): Product
    addUser(username: String!, email: String!): User
>>>>>>> 988770a6c8984182157e3bd8006e3f8a1b27dcca
  }
`;

module.exports = typeDefs;