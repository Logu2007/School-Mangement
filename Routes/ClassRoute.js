const express=require('express')
const router=express.Router()
const {ClassPostController,ClassGetController}=require('../Controller/ClassController')
router.post('/class',ClassPostController)
router.get('/class',ClassGetController)

module.exports=router