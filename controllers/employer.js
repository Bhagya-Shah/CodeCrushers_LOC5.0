const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {StatusCodes,ReasonPhrases} = require('http-status-codes')
const {body,validationResult} =require('express-validator')
const Employer = require('../models/Employer')
const Company = require('../models/Company')
const Job = require('../models/Job')


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
    const userId = req.user.id
    const empr = await Employer.findOne({_id:userId})
    if(!empr){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'Only an employer can post a job opening'})
    }
    const {company,category,domain,desc,location,salary}= req.body
    if(empr.company!=company){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:$`Only an employer of ${company} can post jobs for it`})
    }
    const job = await Job.create({employerId:userId,company,category,domain,desc,location,salary}) 
}



module.exports = {basicEmployerInfo,jobPosting }