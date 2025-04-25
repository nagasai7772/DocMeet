const jwt=require('jsonwebtoken')
require('dotenv').config()

// User authentication middleware
const authUser=async(req,res,next)=>
{
  try {
    const {token}=req.headers
    if(!token)
    {
      return res.json({success:false,message:"Not Authorized Login Again"})
    }
   
      const decoded_token=jwt.verify(token,process.env.JWT_SECRET_KEY)
      req.body.userId=decoded_token.id
     
      next()
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}
module.exports=authUser