const TeacherModel=require('../Model/TeacherModel')
const TeacherPostController=async(req,res)=>{
    const {Class,School,Section,Teacher}=req.body
    //validation
    if(!Class||!School||!Section||!Teacher){
        return res.status(400).json({message:"Fill the Fields"})
    }
    try{
    //db
    const TeacherExists=await TeacherModel.findOne({$and:[{Class},{School},{Section},{Teacher}]})
    if(TeacherExists){
        return res.status(400).json({message:"Details Already Exists!"})
    }
    const TeacherDetails=TeacherModel({
    Class,School,Section,Teacher
    })
    await TeacherDetails.save()
    return res.status(200).json({message:'Details Submitted Successfully!'})
    }
    catch(err){
    return res.status(500).json({message:'server error',err})
    }
    
}
const TeacherGetController=async(req,res)=>{
    try{
        const TeacherDetails=await TeacherModel.find({})
     return   res.status(200).json({message:'data fetched successfully!',TeacherDetails})
        
            }
            catch(err){
        res.status(500).json({message:'server error'})
            }
}
module.exports={TeacherPostController,TeacherGetController}