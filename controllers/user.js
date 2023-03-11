const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {StatusCodes,ReasonPhrases} = require('http-status-codes')
const {body,validationResult} =require('express-validator')
const Company = require('../models/Company')

const login = async(req,res)=>{
    const errors = validationResult(body);
    if(!errors.isEmpty()){
        return res.status(StatusCodes.UNAUTHORIZED).json({err : errors.array()})
    }
    const {email,password} = req.body
    // console.log(email);
    const user = await User.findOne({email:email})
    if(!user){
        // throw new BadRequestError('No user found with this email')
        return res.status(StatusCodes.UNAUTHORIZED).json({msg:'Invalid user'})
    }
    const hashedPass = await bcrypt.compare(password,user.password)
    if(!hashedPass){
        return res.status(StatusCodes.UNAUTHORIZED).json({msg:'Invalid password'})
    }
    const data = {user:
        {id:user.id}
    }
    const authToken = jwt.sign(data,process.env.JWT_SECRET);
    return res.status(StatusCodes.OK).json({authToken})
}

const createUser = async(req,res)=>{
    const errors = validationResult(body)
    if(!errors.isEmpty()){
        console.log(errors);
        // throw new UnauthenticatedError('Please provide valid credentials')
        return res.status(StatusCodes.UNAUTHORIZED).json({err:errors.array()})
    }   
    const {name,email,password,role} = req.body;
    if(!name || !email || !password || !role ){
        // throw new BadRequestError('Please provide name, email, balance and password')
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide name, email, password and role'})
    }
    const u = await User.findOne({email:email});
    if(u){
        // throw new UnauthenticatedError('User with this email already exists')
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'User with email already exists'})
    }
    else{
        const salt =await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password,salt);
        const user = await User.create({name:name,role:role,email,password:hashedPass})
        const comp = await Company.findOne({name:company})
        if(comp){
            await Company.findOneAndUpdate({name:company},{$inc :{numEmployees:1}})
        }
        // res.status(200).json(user);
        const data= {user:
            {id:user.id}
        };
        // console.log(process.env.JWT_SECRET);
        const authToken = jwt.sign(data,process.env.JWT_SECRET);   
        console.log('User created');
        return res.status(StatusCodes.ACCEPTED).json({authToken});
    }
   
}

// get info about user
const getInfo = async(req,res)=>{
    const {id} = req.user;
    if(!id){
        // throw new BadRequestError('No id present')
        return res.status(StatusCodes.BAD_REQUEST).json({msg:'No id present'})
    }
    // when finding based on the id , write _id not id
    const user = await User.findOne({_id:id}).select("-password");
    if(!user){
        return res.status(StatusCodes.UNAUTHORIZED).json({msg:'User with account number does not exist'})
    }
    console.log(user);
    return res.status(StatusCodes.OK).json(user);
}

module.exports ={login,createUser,getInfo}