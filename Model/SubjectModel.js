const mongoose=require('mongoose')
const SubjectSchema=new mongoose.Schema({
    Subject:{type:String,required:true},
    Teacher:{type:String,required:true}
})
const SubjectModel=mongoose.model('Subject',SubjectSchema)
module.exports=SubjectModel