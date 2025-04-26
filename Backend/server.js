const express=require('express')
const cors=require('cors')
const connectDB=require('./config/Mongo.js')
const connectcloudinary=require('./config/cloudinary.js')
const adminRouter = require('./Routes/adminroute.js')
const doctorRouter = require('./Routes/doctorRoute.js')
const userRouter = require('./Routes/userRoute.js')

require('dotenv').config()
// App Config
const app=express()
const port="process.env.PORT || 3000"

// MiddleWares
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))
connectDB()
connectcloudinary()
// Endpoints of Api


app.use('/api/admin',adminRouter) //Whenever we call this api the api as http//:localhost:3000/api/admin/app-doctor
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
app.get('/',(req,res)=>
{
    res.send('Hello this is backend server')
})

app.listen(port,(err)=>
{
    console.log(`server is running ${port} `);
    

})
