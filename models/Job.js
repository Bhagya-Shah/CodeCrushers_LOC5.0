const mongoose = require('mongoose')


const jobSchema = new mongoose.Schema({
    employerId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    category:{
        tyep:String
    },
    domain:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:Number
    },
    posted:{

    }
})

module.exports = new mongoose.model('Job',jobSchema)