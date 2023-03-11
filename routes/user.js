const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const {createUser,login,getInfo} = require('../controllers/user')
const fetchUser = require('../middleware/fetchUser')

router.route('/').post(createUser)
router.post('/login',[
    body(['email']).isEmail(),
    body(['password']).exists()
],login)
router.post('/fet',fetchUser,getInfo)

module.exports = router