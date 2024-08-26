const SectionModel=require('../Model/SectionModel')
const SectionPostController=async(req,res)=>{
//values
const {Class,School,Section}=req.body
//validation
if(!Class||!School||!Section){
    return res.status(400).json({message:"Fill the Fields"})
}
try{
//db
const SectionExists= await SectionModel.findOne({$and:[{Class},{School},{Section}]})
if(SectionExists){
    return res.status(400).json({message:"Details Already Exists!"})
}
const SectionDetails=SectionModel({
Class,School,Section
})
await SectionDetails.save()
return res.status(200).json({message:'Details Submitted Successfully!'})
}
catch(err){
return res.status(500).json({message:'server error',err})
}
}
const SectionGetController=async(req,res)=>{
    try{
const SectionDetails=await SectionModel.find({})
res.status(200).json({message:'data fetched successfully!',SectionDetails})

    }
    catch(err){
res.status(500).json({message:'server error'})
    }
}
module.exports={SectionPostController,SectionGetController}