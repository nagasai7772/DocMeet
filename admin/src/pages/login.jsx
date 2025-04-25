import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";

const Login = () => {
  const [state, setState] = useState("Admin");
  const { setAdminToken, backendUrl } = useContext(AdminContext);
  const {setDoctorToken}=useContext(DoctorContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("AdminToken", data.message);
          setAdminToken(data.message);
        } else {
          toast.error(data.message)
        }
      }
      else
      {
        const {data}=await axios.post(backendUrl+'/api/doctor/login',{email,password})
        if(data.success)
        {
          localStorage.setItem('doctorToken',data.message)
          setDoctorToken(data.message)
          console.log(data.message);
          
        }
        else
        {
          toast.error(data.message)
        }
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Form Container */}
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-lg"
      >
        <p className="text-2xl font-semibold text-gray-700 mb-4">
          <span className="text-green-500 font-bold ">{state}</span> Login
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <p className="text-gray-600 font-medium">Email</p>
          <input
            type="email"
            placeholder="Enter Admin Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <p className="text-gray-600 font-medium">Password</p>
          <input
            type="password"
            placeholder="Enter Admin Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
          Login
        </button>
        {state === "Admin" ? (
          <p className="cursor-pointer">
            Doctor Login?{" "}
            <span
              className="hover:text-blue-700 hover:underline"
              onClick={() => setState("Doctor")}
            >
              ClickHere
            </span>
          </p>
        ) : (
          <p className="cursor-pointer">
            Admin Login ?{" "}
            <span
              className="hover:text-blue-700 hover:underline"
              onClick={() => setState("Admin")}
            >
              ClickHere
            </span>
          </p>
        )}
      </form>

      {/* Image Section */}
      <div className="mt-6 md:mt-0 md:ml-6">
        <img
          src={state === "Admin" ? assets.Adminform : assets.DoctorForm}
          alt="Admin Login"
          className=" h-72  md:w-96 md:h-96 rounded"
        />
      </div>
    </div>
  );
};

export default Login;
