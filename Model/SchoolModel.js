const mongoose=require('mongoose')
const SchoolSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Address:{type:String,required:true},
    Contact:{type:Number,required:true},
    Pricipal:{type:String,required:true}
})
const SchoolModel=mongoose.model('School',SchoolSchema)
module.exports=SchoolModel