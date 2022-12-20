// const {categories} = require('../db');

exports.Product = {
    category:(parent,args,context) => {
      const {categories} = context;
      const categoryId = parent.categoryId;
      // console.log(categoryId)
      return categories.find((category)=> category.id === categoryId)
    },
    reviews:(parent,args,{reviews}) => {
      // const {reviews} = context;
      const id = parent.id;

      return reviews.filter((review) => review.productId === id )
    }
  }