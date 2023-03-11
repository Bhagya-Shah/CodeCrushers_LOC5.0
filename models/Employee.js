const mongoose = require('mongoose')
const User = require('./User')


const employeeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:User,
        required:[true,'User should be associated with an employee']
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
        type:String,
        required:true
    },
    skills:[{
        type:String,
        required:true
    }]
})

module.exports = new mongoose.model('Employee',employeeSchema)

