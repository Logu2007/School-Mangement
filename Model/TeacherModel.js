const mongoose=require('mongoose')
const TeacherSchema=new mongoose.Schema({
    Teacher:{type:String,required:true},
    Class:{type:String,required:true},
    School:{type:String,required:true},
    Section:{type:String,required:true},


})
const TeacherModel=mongoose.model('Teacher',TeacherSchema)
module.exports=TeacherModel