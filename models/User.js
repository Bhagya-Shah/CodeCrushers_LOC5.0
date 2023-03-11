const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['employee','employer'],
        default:'employee'
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    connects:[{
        type:mongoose.Types.ObjectId
    }]
})

module.exports = new mongoose.model('User',UserSchema)