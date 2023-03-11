const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {StatusCodes,ReasonPhrases} = require('http-status-codes')
const {body,validationResult} =require('express-validator')
const Employee = require('../models/Employee')
const Employer = require('../models/Employer')
const Company = require('../models/Company')


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
    const emp = await Employee.findOne({_id:userId})
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
    const emp =  await Employee.findOne({_id:userId})
    

}

// filtered jobs
const filterJobs = async(req,res)=>{

}

module.exports = {basicEmployeeInfo,reviewCompany}