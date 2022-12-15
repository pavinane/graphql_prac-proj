const {ApolloServer,gql} =  require('apollo-server');
// const { products } = require('./data');
const {typeDefs} = require('./schema');
const {Query} = require('./resolvers/Query');
const {Category} = require('./resolvers/Category');
const {Product} = require('./resolvers/Product');
// const {products,categories} = require('./db')

// String , Int, Float, 











const server = new ApolloServer({
    typeDefs,
    resolvers:{
      Query,
      Category,
      Product
    }
})


server.listen().then(({url}) => {
    console.log("Server ready to run at" + url);
})