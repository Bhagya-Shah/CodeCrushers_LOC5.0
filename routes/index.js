const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userRouter = require('./user')
const employeeRouter = require('./employee')
const employerRouter = require('./employer')
 
router.use('/user',userRouter)
router.use('/employee',employeeRouter)
router.use('/employer',employerRouter)

module.exports = router