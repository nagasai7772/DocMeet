const jwt=require('jsonwebtoken')
require('dotenv').config()

// USER AUTHENTICATION MIDDLEWARE
const authDoctor=async(req,res,next)=>
{
  try {
    const {doctortoken}=req.headers
    if(!doctortoken)
    {
      return res.json({success:false,message:"Not Authorized Login Again"})
    }
   
      const decoded_token=jwt.verify(doctortoken,process.env.JWT_SECRET_KEY)
      req.body.docId=decoded_token.id
     
      next()
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}
module.exports=authDoctor