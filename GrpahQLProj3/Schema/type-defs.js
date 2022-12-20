const {gql} = require("apollo-server");

const typeDefs = gql `

    type Register{
        id:ID!
        name:String!
        email:String!
        Phone:Int!
        Password:String!
        user:[User!]!
    }


    type User {
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality: Nationality!
        friends:[User]

    } 

    enum Nationality {
        CANADA
        BRAZIL
        CHILE
        INDIA
        GERMANY
    }



    type Query {
        registers:[Register!]!
        users:[User!]!
        user(id:ID!):User!
    }
`


module.exports = {typeDefs}