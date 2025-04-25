import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/Appcontext";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
// import Link from 'react-router-dom'
// import Otp from "./Otp";


const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [MobileNum, setMobileNum] = useState("");
  const navigate=useNavigate()
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state == "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          password,
          email,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          password,
          email,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };
  useEffect(()=>
  {
    if(token)
    {

      navigate('/')
    }

  },[token])
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome To <span className="text-blue-600">DocMeet</span>
          <img
            src={assets.formimg}
            alt="logo"
            className="inline-block w-8 h-8 ml-2"
          />
        </h1>
        <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>
          <div>
            <p className="text-2xl font-semibold">
              {state === "Sign Up" ? "Create Account" : "Login"}
            </p>
            <br />
            <p>
              Please {state === "Sign Up" ? "Signup" : "Log in"} to Book
              Appointment
              {state === "Sign Up" && (
                <div>
                  {" "}
                  <br />
                  <label className="font-semibold">Full Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border p-2 rounded-md w-full"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              )}
            </p>
          </div>

          <label className="font-semibold">Enter Mail:</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border p-2 rounded-md w-full"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          {/* <label className="font-semibold">Enter Mobile:</label>
        <input type="tel" placeholder="Enter Mobile Number" className="border p-2 rounded-md w-full" onChange={(e)=>setMobileNum(e.target.MobileNum)} value={MobileNum}  /> */}

          <label className="font-semibold">Enter Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="border p-2 rounded-md w-full"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />


          <button
            type="submit"
            className="text-white bg-green-500 hover:bg-blue-600 w-full py-2 rounded-md text-base transition-all duration-400 hover:scale-105"
          >
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>

          {state === "Sign Up" ? (
            <p>
              Already Have an Account ?{" "}
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setState("Login")}
              >
                Login Here
              </span>
            </p>
          ) : (
            <p>
              Create an Account?{" "}
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Click Here
              </span>
            </p>
          )}
        </form>
        {/* <button>mdslak</button> */}
      </div>

      <div className="w-full md:w-1/2  flex justify-center items-center p-6">
        <img
          src={assets.Signupimg}
          alt="SignupImage"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg -skew-x-6"
        />
      </div>
    </div>
  );
};

export default Login;
