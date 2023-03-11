const mongoose = require('mongoose')
const User = require('./User')


const employerSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:User,
        required:[true,'User should be associated with an employer']
    },
    company:{
        type:String,
        required:true
    },
    companyUrl:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('Employer',employerSchema)

