const express=require('express')
const router=express.Router()
const {TeacherPostController,TeacherGetController}=require('../Controller/TeacherController')
router.post('/teacher',TeacherPostController)
router.get('/teacher',TeacherGetController)
module.exports=router