const {ApolloServer,gql} =  require('apollo-server');
const  {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core')

// const { products } = require('./data');
const {typeDefs} = require('./schema');
const {Query} = require('./resolvers/Query');
const {Mutation} = require('./resolvers/Mutation')
const {Category} = require('./resolvers/Category');
const {Product} = require('./resolvers/Product');

const {products,categories,reviews,users} = require('./db')

// String , Int, Float, 


const server = new ApolloServer({
    typeDefs,

    resolvers:{
      Query,
      Mutation,
      Category,
      Product
      
    },

    context:{
      categories,
      products,
      reviews,
      users
    },
    plugins:[
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
})


server.listen().then(({url}) => {
    console.log("Server ready to run at" + url);
})