// API to register the user
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailer = require("nodemailer");
const userModel = require("../models/usermodel");
const { text } = require("express");
const cloudinary = require("cloudinary");
const doctorModel = require("../models/doctormodel");
const appointmentModel = require("../models/appointmentModel");
const razorpay = require("razorpay");
// const stripe=require('stripe')
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Details are Missing" });
    }
    //validating email format is correct or not
    if (!validator.isEmail(email)) {
      return res.json({ success: true, message: "Enter a valid Mail" });
    }
    //validating for strong password
    if (password.length < 8) {
      return res.json({ success: true, message: "Enter a valid Password" });
    }
    // hashing the user password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedpassword,
    };
    // const transport = mailer.createTransport({
    //   host: "smtp.gmail.com",
    //   secure: false,
    //   port: process.env.EMAIL_PORT,
    //   auth: {
    //     user: process.env.SENDER_EMAIL,
    //     pass: process.env.SENDER_PASS_KEY,
    //   },
    // });
    // let otpNum = "";
    // let receiverOtp = req.body.mail;
    // console.log(req);
    // for (i = 0; i < 5; i++) {
    //   GenratedOtp = Math.floor(Math.random() * 10);
    //   otpNum += GenratedOtp;
    // }
    // const mailoptions = {
    //   from: process.env.SENDER_EMAIL,
    //   to: email,
    //   subject: process.env.SUBJECT,
    //   text: process.env.TEXT_CONTENT + otpNum,
    // };
    // transport.sendMail(mailoptions, (err, info) => {
    //   if (err) {
    //     console.log(err);
    //     res.json({ success: false, message: err.message });
    //   } else {
    //     console.log(sucess);
    //     res.json({ sucess: true, message: "Email sended", info });
    //   }
    // });

    const newUser = new userModel(userData);
    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    res.json({ success: true, message: token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Api for User login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Api For OTP Authentication

// API to Get user Profile details
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId).select("-password");
    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// API to update user profile
const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;
    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Details Are Missing" });
    }
    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      // upload Image to Cloudinary
      const imageupload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageURL = imageupload.secure_url;
      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }
    res.json({ success: true, message: "Profile Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API To Book Appointments

const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime } = req.body;
    const docData = await doctorModel.findById(docId).select("-password");
    if (!docData.available) {
      return res.json({ success: false, message: "Doctor Not Available" });
    }
    let slots_booked = docData.slots_booked;
    // Checking for Slots Availabity
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "Slot Not Available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }
    const userData = await userModel.findById(userId).select("-password");
    delete docData.slots_Booked;

    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };
    const newAppoinment = new appointmentModel(appointmentData);
    await newAppoinment.save();

    // save new slots Data in DocData
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });
    res.json({ success: true, message: "Appointment Booked" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// Api To Get User Appointments for my-appoinments frontend page
const listAppointments = async (req, res) => {
  try {
    const { userId } = req.body;
    const appointments = await appointmentModel.find({ userId });
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// API To Cancel Appointments

const cancelAppointment = async (req, res) => {
  try {
    const { userId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
    //  Verifying The Appointment user
    if (appointmentData.userId != userId) {
      return res.json({ success: false, message: "UnAuthorized Action" });
    }
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
// API TO MAKE PAYMENTS USING RAZOR PAY
const razorpayInstsance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const paymentRazorPay = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData || appointmentData.cancelled) {
      return res.json({
        sucess: false,
        message: "Appointment cancelled or Not Found",
      });
    }
    // Creating options for Razor Payment
    const options = {
      amount: appointmentData.amount * 100,
      currency: process.env.CURRENCY,
      receipt: appointmentId,
    };
    // creation of an order
    const order = await razorpayInstsance.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API TO VERIFY PAYMENT OF RAZORPAY
const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstsance.orders.fetch(razorpay_order_id);

    if (orderInfo.status == "paid") {
      await appointmentModel.findByIdAndUpdate(orderInfo.receipt, {
        payment:true,
      });
      res.json({ success: true, message: "Payment Successfull" });
    } else {
      res.json({ success: false, message: "Payment Failed" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointments,
  cancelAppointment,
  paymentRazorPay,
  verifyRazorpay,
};
