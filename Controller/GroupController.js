const GroupModel=require('../Model/GroupModel')
const GroupPostController=async(req,res)=>{
//values
const {Group,Subject}=req.body
//validation
if(!Group||!Subject){
    return res.status(400).json({message:'Fill the Fields'})
}
//database
try{
const GroupDetails=GroupModel({
    Group,Subject
})
await GroupDetails.save()
return res.status(200).json({message:'Details Submitted Successfully!'})
}
catch(err){
res.status(500).json({message:'server error',err})
}
}
const GroupGetController=async(req,res)=>{
try{
const GroupDetails=await GroupModel.find({})
return res.status(200).json({message:'Data fetched successfully!',GroupDetails})
}
catch(err){
res.status(500).json({message:'server error',err})
}
}
module.exports={GroupPostController,GroupGetController}