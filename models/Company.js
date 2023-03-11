const mongoose = require('mongoose')
const Employer = require('./Employer')

const reviewSchema = new mongoose.Schema({
    employeeId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    culture:{
        type:Number,
        min:0,
        max:5,
        required:true
    },
    workload:{
        type:Number,
        min:0,
        max:5,
        required:true
    },
    salary:{
        type:Number,
        min:0,
        max:5,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})

const companySchema = new mongoose.Schema({
    employerId:{
        type:mongoose.Types.ObjectId,
        ref:Employer,
        required:[true,'User should be associated with an employer']
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    companyUrl:{
        type:String,
        required:true
    },
    companyMail:{
        type:String,
        required:true
    },
    numEmployees:{
        type:Number,
        default:0
    },
    numFollowers:{
        type:Number,
        default:0
    },
    reviews:[reviewSchema]
})

module.exports = new mongoose.model('Company',companySchema)

