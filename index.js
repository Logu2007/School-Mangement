const express=require('express')
const app =express()
const mongoose=require('mongoose')
const cors=require('cors')
//import routes

const SchoolPostController=require('./Routes/SchoolRoute')
const SchoolGetController=require('./Routes/SchoolRoute')
const ClassPostController=require('./Routes/ClassRoute')
const ClassGetController=require('./Routes/ClassRoute')
const SectionPostController= require('./Routes/SectionRoute')
const SectionGetController= require('./Routes/SectionRoute')
const TeacherPostController=require('./Routes/TeacherRoute')
const TeacherGetController=require('./Routes/TeacherRoute')
const SubjectPostController=require('./Routes/SubjectRoute')
const SubjectGetController=require('./Routes/SubjectRoute')
const GroupGetController=require('./Routes/GroupRoute')
const GroupPostController=require('./Routes/GroupRoute')





//database
mongoose.connect('mongodb://localhost:27017/SchoolMangement').then(()=>{
    console.log('db is connected')
}).catch((err)=>{
    console.log('db error',err)
})
//middleware
app.use(cors())
app.use(express.json())
//routes
app.use(SchoolPostController)
app.use(SchoolGetController)
app.use(ClassPostController)
app.use(ClassGetController)
app.use(SectionPostController)
app.use(SectionGetController)
app.use(TeacherPostController)
app.use(TeacherGetController)
app.use(SubjectPostController)
app.use(SubjectGetController)
app.use(GroupGetController)
app.use(GroupPostController)


//server
app.listen(4000,()=>{
    console.log('server is running')
})