const {UserList} = require('./FakeData');
const _ = require ("lodash");


const resolvers = {
    Query:{
        users:() => {
         
            return UserList
        },
        user:(_,args,context)=>{

            console.log("id",id)
            const id = args.id
            const User =  _.find(UserList ,{id});;
            console.log("Userlist",Userlist)
            return User
        }

        // user:(parent,{id},context) =>{
        //     // const productId = args.id;
    
        //     const product = UserList.find((product) => product.id === id);
    
        //     if(!product) return null;
        //     return product
        // },

    }
}

module.exports = {resolvers}