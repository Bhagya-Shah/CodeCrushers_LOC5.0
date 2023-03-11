const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {StatusCodes,ReasonPhrases} = require('http-status-codes')
const {body,validationResult} =require('express-validator')
const Employee = require('../models/Employee')
const Employer = require('../models/Employer')


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

}




module.exports = {basicEmployeeInfo,reviewCompany}