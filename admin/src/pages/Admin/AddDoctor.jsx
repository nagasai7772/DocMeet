import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";
const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");
  const { backendUrl, AdminToken } = useContext(AdminContext);
  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      // formData.forEach((val,key)=>
      //   console.log(`${key}:${val}`)
      //   )
      
      
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { AdminToken } }
      );
      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setFees('')
        setAbout('')
        
        
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error)

    }
  };

  return (
    <form className="m-5 w-full" onSubmit={SubmitHandler}>
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full mx-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-800">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            type="file"
            id="doc-img"
            hidden
            onChange={(e) => setDocImg(e.target.files[0])}
          />
          <p>
            Upload Doctor <br /> image
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input
                type="text"
                placeholder="Enter Doctor Name "
                required
                value={name}
                className="border rounded px-3 py-2"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                type="email"
                placeholder="Enter Doctor Email "
                required
                value={email}
                className="border rounded px-3 py-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                type="password"
                placeholder="Enter Doctor Password "
                required
                value={password}
                className="border rounded px-3 py-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                name=""
                id=""
                className="border rounded px-3 py-2"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="1Year">1Year</option>
                <option value="2Years">2Years</option>
                <option value="3Years">3Years</option>
                <option value="4Years">4Years</option>
                <option value="5Years">5Years</option>
                <option value="6Years">6Years</option>
                <option value="7Years">7Years</option>
                <option value="8Years">8Years</option>
                <option value="9Years">9Years</option>
                <option value="10Years">10Years</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Fees</p>
              <input
                type="tel"
                placeholder="Enter Doctor Fees "
                required
                onChange={(e) => setFees(e.target.value)}
                className="border rounded px-3 py-2"
                value={fees}
              />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                name=""
                id=""
                className="border rounded px-3 py-2"
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
              >
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Education </p>
              <input
                type="text"
                placeholder="Enter Doctor Education "
                required
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Address </p>
              <input
                type="text"
                placeholder="Enter Address 1"
                required
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Enter Address 2"
                required
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2">About Doctor </p>
          <textarea
            placeholder="Write About Doctor "
            rows={5}
            required
            className="w-full px-4 pt-2 border rounded"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-400 py-3 mt-4 px-10 text-white rounded-full hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-500"
      >
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctor;
