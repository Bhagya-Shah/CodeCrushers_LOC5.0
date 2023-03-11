const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {StatusCodes,ReasonPhrases} = require('http-status-codes')
const {body,validationResult} =require('express-validator')
const Employer = require('../models/Employer')
const Company = require('../models/Company')


// first time info
const basicEmployerInfo = async(req,res)=>{
    const {company,companyUrl} = req.body;
    const userId = req.user.id;
    if(!companyUrl || !company){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"Please provide company and company's url"})
    }
    const emp = await Employer.create({company,companyUrl})
    const comp = await Company.create({employerId:userId,name:company,companyUrl})
    return res.status(StatusCodes.CREATED).json(emp)
}


// posting jobs
const jobPosting = async(req,res)=>{
    
}



module.exports = {basicEmployerInfo,jobPosting }