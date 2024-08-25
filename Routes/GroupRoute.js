const express=require('express')
const router=express.Router()
const {GroupGetController,GroupPostController}=require('../Controller/GroupController')
router.post('/group',GroupPostController)
router.get('/group',GroupGetController)
module.exports=router
