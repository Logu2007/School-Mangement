const SubjectModel=require('../Model/SubjectModel')
const SubjectPostController=async(req,res)=>{
//values
const {Subject,Teacher}=req.body
//validation
if(!Subject||!Teacher){
    return res.status(400).json({message:"Fill the Fields"})
}
try{
//db
const SubjectDetails=SubjectModel({
Subject,Teacher
})
await SubjectDetails.save()
return res.status(200).json({message:'Details Submitted Successfully!'})
}
catch(err){
return res.status(500).json({message:'server error',err})
}
}
const SubjectGetController=async(req,res)=>{
    try{
const SubjectDetails=await SubjectModel.find({})
res.status(200).json({message:'data fetched successfully!',SubjectDetails})

    }
    catch(err){
res.status(500).json({message:'server error'})
    }
}
module.exports={SubjectPostController,SubjectGetController}