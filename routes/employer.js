const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const { basicEmployerInfo,jobPosting } = require('../controllers/employer')
const fetchUser = require('../middleware/fetchUser')

router.post('/',fetchUser,basicEmployerInfo)
router.post('/postjob',fetchUser,jobPosting)

module.exports = router