// const {products,categories} = require('../db');

const { reviews } = require("../db");

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

    
    // products:(parent,args,{products}) =>  products,

    products:(parent,{filter},{products}) => {
        
        let filteredProducts = products;

        if(filter) {

            const {onSale,avgRating} = filter;
            if(onSale){
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale
                }) 
            }
            if([1,2,3,4,5].includes(avgRating)){
            

                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                let numberOfReviews = 0;
                    reviews.forEach((review) => {
                        if(review.productId === product.id){
                            sumRating += review.rating;
                            numberOfReviews++;
                        };
                    });

                    const  avgProductionRating = sumRating / numberOfReviews;
                    console.log(avgProductionRating,product.name);
                    return  avgProductionRating >= avgRating;
                })
            }
        }
        return filteredProducts;

    },


    // They are two methods fetch data through id 
    //  1st method is product function get data through id
    product:(parent,{id},{products}) =>{
        // const productId = args.id;

        const product = products.find((product) => product.id === id);

        if(!product) return null;
        return product
    },
    
    categories:(parent,args,{categories}) => categories,

     //2nd method is category function  get data through id ,just simplify the function 
    category:(parent,{id},{categories}) => {
    //   const {id} = args;

      return category = categories.find((category) => category.id === id)
    },

    users:(parent,args,{users}) => users,
    
    user:(parent,{id},{users}) => {
        return user = users.find((user) => user.id === id)
    }
   
    
}