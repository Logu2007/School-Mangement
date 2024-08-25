const mongoose=require('mongoose')
const GroupSchema=new mongoose.Schema({
    Group:{type:String,required:true},
    Subject:{type:String,required:true},

})
const GroupModel=mongoose.model('Group',GroupSchema)
module.exports=GroupModel