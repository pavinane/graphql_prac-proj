const {products,categories} = require('../db');

exports.Query={
    hello:() =>{
        return "World"
    },
    // numberOfAnimals:() => {
    //     return 100
    // },
    // price:() => {
    //     return 5665.5615
    // },
    // isCool:() => {
    //     return false
    // }
    products:() =>  products,


    // They are two methods fetch data through id 
    //  1st method is product function get data through id
    product:(parent,args,context) =>{
        const productId = args.id;

        const product = products.find((product) => product.id === productId);

        if(!product) return null;
        return product
    },
    
    categories:() => categories,

     //2nd method is category function  get data through id ,just simplify the function 
    category:(parent,args) => {
      const {id} = args;

      return category = categories.find((category) => category.id === id)
    }
   
    
}