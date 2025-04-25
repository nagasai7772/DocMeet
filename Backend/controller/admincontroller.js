const validator = require("validator");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary");
const doctorModel=require('../models/doctormodel')
const jwt=require('jsonwebtoken');
const appointmentModel = require("../models/appointmentModel");
const userModel = require("../models/usermodel");
require('dotenv').config()
//Add Doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imgFile = req.file;
    //    Checking the data to add a new doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({
        success: false,
        message: "Please Fill the All Details",
      });
    }
    //    validating the Email is correct or not

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter The Valid Email",
      });
    }

    //    Validating the password is Strong
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter The strong password",
      });
    }
    // hashing the doctor password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // upload images to cloudinary
    const uploadImage = await cloudinary.uploader.upload(imgFile.path, {
      resource_type: "image",
    });
    const imageURL = uploadImage.secure_url;
    const doctorData = {
      name,
      email,
      image: imageURL,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor=new doctorModel(doctorData)
    await newDoctor.save()
    res.json({success:true,message:'A new Doctor is Added'})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
    
  }
};

// API for admin Login
const adminLogin=async(req,res)=>
{
  try {
    const {email,password}=req.body
    if(email===process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD)
    {
      const token=jwt.sign(email+password,process.env.JWT_SECRET_KEY)
      res.json({success:true,message:token})
    }
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}
//API to get all doctors list for Admin
const allDoctors=async(req,res)=>
{
  try {
    // .select we excluding the password in the doctors list
const doctors=await doctorModel.find({}).select('-password')
res.json({success:true,doctors})
    
  } catch (error) {
    console.log(error);
    
    res.json({success:false,message:error.message})
  }

}
// API TO GET ALL APPOINTMENTS LIST
const appointmentsAdmin=async(req,res)=>
{
  try {
    const appointments=await appointmentModel.find({})
    res.json({success:true,appointments})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}
// API FOR APPOINTMENT CANCELLATION
const appointmentCancel = async (req, res) => {
  try {
    const {  appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
       await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });
    // Releasing Doctors Slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);
    let slots_booked = doctorData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e != slotTime
    );
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });
    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API TO GET DASHBOARD DATA FOR ADMIN PANEL
const adminDashboard=async(req,res)=>
{
  try {
    const doctors=await doctorModel.find({})
    const users=await userModel.find({})
    const appointments=await appointmentModel.find({})
    const dashData={
      doctors:doctors.length,
      appointments:appointments.length,
      patients:users.length,
      latestAppointments:appointments.reverse().slice(0,5)

    }
    res.json({success:true,dashData})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

module.exports = { addDoctor,adminLogin,allDoctors,appointmentsAdmin,appointmentCancel,adminDashboard };
