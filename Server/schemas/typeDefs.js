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
  }
`;

module.exports = typeDefs;