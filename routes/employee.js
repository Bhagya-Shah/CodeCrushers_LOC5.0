const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const { basicEmployeeInfo,reviewCompany } = require('../controllers/employee')
const fetchUser = require('../middleware/fetchUser')

router.post('/',fetchUser,basicEmployeeInfo)
router.post('/review',fetchUser,reviewCompany)

module.exports = router