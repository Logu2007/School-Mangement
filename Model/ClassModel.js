const mongoose=require('mongoose')
const ClassSchema=new mongoose.Schema({
    Class:{type:String,required:true},
    School:{type:String,required:true},

})
const ClassModel=mongoose.model('Class',ClassSchema)
module.exports=ClassModel