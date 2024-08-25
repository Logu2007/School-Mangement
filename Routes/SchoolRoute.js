const express=require('express')
const router=express.Router()
const {SchoolPostController,SchoolGetController}=require('../Controller/SchoolController')
router.post('/school',SchoolPostController)
router.get('/school',SchoolGetController)

module.exports=router