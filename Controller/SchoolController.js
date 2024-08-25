const SchoolModel=require('../Model/SchoolModel')
const SchoolPostController=async(req,res)=>{
//values
const {Name,Address,Contact,Pricipal}=req.body
//validation
if(!Name||!Address||!Contact||!Pricipal){
    return res.status(400).json({message:"Fill the Fields"})
}
try{
//db
const SchoolDetails=SchoolModel({
    Name,Address,Contact,Pricipal
})
await SchoolDetails.save()
return res.status(200).json({message:'Details Submitted Successfully!'})
}
catch(err){
return res.status(500).json({message:'server error',err})
}
}
const SchoolGetController=async(req,res)=>{
    try{
const SchoolDetails=await SchoolModel.find({})
res.status(200).json({message:'data fetched successfully!',SchoolDetails})

    }
    catch(err){
res.status(500).json({message:'server error'})
    }
}
module.exports={SchoolPostController,SchoolGetController}