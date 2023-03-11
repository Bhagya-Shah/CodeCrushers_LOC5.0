const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {StatusCodes,ReasonPhrases} = require('http-status-codes')
const {body,validationResult} =require('express-validator')
const Employee = require('../models/Employee')
const Employer = require('../models/Employer')
const Company = require('../models/Company')
const Job = require('../models/Job')


// first time info
const basicEmployeeInfo = async(req,res)=>{
    const {experience,desg,company,skills} = req.body;
    const userId = req.user.id;
    if(!experience || !desg || !company || !skills){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide experience, designation, company and skills'})
    }
    const emp = await Employee.create({userId:userId,experience,desg,company,skills})
    return res.status(StatusCodes.CREATED).json(emp)
}

// reviews
const reviewCompany = async(req,res)=>{
    const userId = req.user.id
    const emp = await Employee.findOne({userId:userId})
    console.log(emp);
    if(!emp){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'Only an employee can post a review'})
    }
    const {company,culture,workload,salary,desc} = req.body
    if(emp.company!==company){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:`Only an employee of ${company} can post review for it`})
    }
    const temp = {employeeId:userId,culture,workload,salary,desc}
    const comp = await Company.findOneAndUpdate({name:company},{$push:{reviews:temp}})
    return res.status(StatusCodes.OK).json({comp})
}


// getting all jobs 
const getJobs = async(req,res)=>{
    const userId = req.user.id
    const emp =  await Employee.findOne({userId:userId})
    if(!emp){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'Only an employee can view the jobs'})
    }
    const jobs = await Job.find({})
    return res.status(StatusCodes.OK).json({jobs})
}

// filtered jobs
const filterJobs = async(req,res)=>{
    const userId = req.user.id
    const emp =  await Employee.findOne({_id:userId})
    if(!emp){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'Only an employee can view the jobs'})
    }
    const {location,salary,domain,company} = req.body
    if(location && salary && domain && company){
        const all = await Job.find({location,salary,domain,company})
        return res.status(StatusCodes.OK).json({all})
    }
    let temp= []
    if(location){
        const loc = await Job.find({location})
        temp.push(loc)
    } 
    if(salary){
        const sal = await Job.find({salary:{$gte:salary}})
        temp.push(sal)
    }
    if(domain){
        const dom = await Job.find({domain})
        temp.push(dom)
    }
    if(company){
        const comp = await Job.find({company})
        temp.push(comp)
    }
    return res.status(StatusCodes.OK).json({temp})
}

module.exports = {basicEmployeeInfo,reviewCompany,getJobs,filterJobs}