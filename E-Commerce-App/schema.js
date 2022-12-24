const {gql} =  require('apollo-server');
exports. typeDefs = gql`



#  assign all query types stores here
type Query {
  hello: String
  # numberOfAnimals:Int
  # price:Float
  # isCool:Boolean
  products(
    filter: ProductsFilterInput 
  ):[Product!]!

  product(id:ID!):Product

  categories:[Category!]!
  
  category(id:ID!):Category

  users:[User!]!

  user(id:ID!):User
},



# create query data here seperate

type Product{
  id:ID!
  name:String!
  description:String!
  quantity:Int!
  price:Float!
  onSale:Boolean!
  category:Category
  reviews:[Review!]!
}

type Category{
  id:ID!
  name:String!
  products:[Product!]!
}

type Review{
  id:ID!
  date:String!
  title:String!
  comment:String!
  rating:Int!
  # productId:[Product!]!
}


input ProductsFilterInput{
  onSale:Boolean 
  avgRating:Int
}

type User {
  id:ID!
  name:String!
  email:String!
  phone:Int!
  sex:String!

}


`;