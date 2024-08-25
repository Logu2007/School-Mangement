const mongoose=require('mongoose')
const SectionSchema=new mongoose.Schema({
    Class:{type:String,required:true},
    School:{type:String,required:true},
    Section:{type:String,required:true},


})
const SectionModel=mongoose.model('Section',SectionSchema)
module.exports=SectionModel