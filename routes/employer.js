const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const { basicEmployerInfo } = require('../controllers/employer')
const fetchUser = require('../middleware/fetchUser')

router.post('/',fetchUser,basicEmployerInfo)

module.exports = router