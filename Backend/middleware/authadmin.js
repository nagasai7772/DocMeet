const jwt=require('jsonwebtoken')
require('dotenv').config()
const authAdmin=async(req,res,next)=>
{
  try {
    const {admintoken}=req.headers
    if(!admintoken)
    {
      return res.json({success:false,message:"Not Authorized Login Again"})
    }
    else
    {
      const decoded_token=jwt.verify(admintoken,process.env.JWT_SECRET_KEY)
      if(decoded_token!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)
      {
        return res.json({success:false,message:"Not  Authorized Login Again Admin"})
      }
      next()
    }
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}
module.exports=authAdmin