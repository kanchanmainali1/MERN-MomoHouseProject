
const{ createUser,login}=require('../controller/userController')
const express= require('express')
const router= express.Router()
router.post('/createUser',createUser)
router.post('/login',login)

module.exports=router
