const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const { basicEmployeeInfo,reviewCompany,getJobs,filterJobs } = require('../controllers/employee')
const fetchUser = require('../middleware/fetchUser')

router.post('/',fetchUser,basicEmployeeInfo)
router.post('/review',fetchUser,reviewCompany)
router.post('/jobs',fetchUser,getJobs)
router.post('/filter',fetchUser,filterJobs)

module.exports = router