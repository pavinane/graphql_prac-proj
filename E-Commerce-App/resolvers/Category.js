const {products} = require('../db');

exports.Category={
    products:(parent,args,context)=>{
      const categoryId = parent.id;  // parent.id is nothing that is category as a parent 
      console.log(categoryId)
      return products.filter((product) => product.categoryId === categoryId)
    }
  }