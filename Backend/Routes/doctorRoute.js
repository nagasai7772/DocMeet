const express=require('express')
const { doctorList,loginDoctor,appointmentDoctors,appointmentCancel,appointmentComplete,doctorDashboard,doctorProfile,updateDoctorProfile } = require('../controller/doctorcontroller')
const authDoctor = require('../middleware/authDoctor')
const doctorRouter=express.Router()
doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentDoctors)
doctorRouter.post('/complete-appointment',authDoctor,appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)
doctorRouter.get('/profile',authDoctor,doctorProfile)
doctorRouter.post('/update-profile',authDoctor,updateDoctorProfile)
// export default doctorRouter
module.exports=doctorRouter