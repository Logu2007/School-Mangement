const express=require('express')
const router=express.Router()
const {SectionPostController,SectionGetController}=require('../Controller/SectionController')
router.post('/section',SectionPostController)
router.get('/section',SectionGetController)

module.exports=router