const mongoose = require('mongoose')
const User = require('./User')


const employeeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:User,
        unique:true,
        required:[true,'Employee should be associated with an User']
    },
    experience:{
        type:Number,
        required:true,
        default:0
    },
    desg:{
        type:String,
        required:true,
        default:'Fresher'
    },
    company:{
        type:String
    },
    skills:[{
        type:String,
        required:true
    }]
})

module.exports = new mongoose.model('Employee',employeeSchema)

