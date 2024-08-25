const ClassModel=require('../Model/ClassModel')
const ClassPostController=async(req,res)=>{
//values
const {Class,School}=req.body
//validation
if(!Class||!School){
    return res.status(400).json({message:'Fill the Fields'})
}
//database
try{
const ClassDetails=ClassModel({
    Class,School
})
await ClassDetails.save()
return res.status(200).json({message:'Details Submitted Successfully!'})
}
catch(err){
res.status(500).json({message:'server error',err})
}
}
const ClassGetController=async(req,res)=>{
try{
const ClassDetails=await ClassModel.find({})
return res.status(200).json({message:'Data fetched successfully!',ClassDetails})
}
catch(err){
res.status(500).json({message:'server error',err})
}
}
module.exports={ClassPostController,ClassGetController}