import { gql } from 'apollo-server-express';

export const typeDefs = gql`

type Query {
    helloWorld: String!
    tests: [test!]!
    users:[user!]!
    listings:[listing!]!
}

type test {
    id: ID!
    name: String!
}
type listing {
    id: ID!
    listing_id: String!
    listing_title: String!
    description: String!
    street: String!
    city: String!
    postal_code: String!
    price: String!
    email: String!
    username: String!
}
type user {
    id: ID!
    username: String!
    firstname: String!
    lastname: String!
    password: String!
    email: String!
    type: String!
}

type Mutation {
    createtest(name: String!): test!
    
    createlisting(
        listing_id: String!,
        listing_title: String!,
        description: String!,
        street: String!,
        city: String!,
        postal_code: String!,
        price: String!,
        email: String!,
        username: String!
    ): listing!

    createuser(
        username: String!,
        firstname: String!,
        lastname: String!,
        password: String!,
        email: String!,
        type: String!
    ): user!
}

`;