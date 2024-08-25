const express=require('express')
const router=express.Router()
const {SubjectPostController,SubjectGetController}=require('../Controller/SubjectController')
router.post('/subject',SubjectPostController)
router.get('/subject',SubjectGetController)
module.exports=router