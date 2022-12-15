const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    job:{
        type:String
    },
    address:{
        type: String
    },

    city:{
        type:String
    },
    state:{
        type:String
    },
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }
})


module.exports = mongoose.model('UserProfile',UserSchema)