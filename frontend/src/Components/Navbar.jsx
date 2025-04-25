import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/Appcontext";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setshowMenu] = useState(false);
  const {token,setToken,userData}=useContext(AppContext)
  const logout=()=>
  {
    setToken(false)
    localStorage.removeItem('token')
  }
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')}
        src={assets.logo}
        alt=""
        srcset=""
        style={{ height: "50px", cursor: "pointer" }}
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 ">
        {token  && userData ?(
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={userData.image} alt="" className="w-8 rounded-full"/>
            <img src={assets.dropdown_icon} alt="" className="w-2.5 "/>
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p className="cursor-pointer hover:text-black" onClick={()=>navigate('/my-profile')}>My Profile</p>
                    <p className="cursor-pointer hover:text-black" onClick={()=>navigate('/my-appointments')}>My Appointments</p>
                    <p className="cursor-pointer hover:text-black" onClick={logout}>Logout </p>
                </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
       <img 
  onClick={() => setshowMenu(true)} 
  src={assets.menu_icon} 
  alt="Menu Icon" 
  className="w-6 md:hidden cursor-pointer"
/>

{/* Mobile options */}
<div className={`${showMenu ? 'fixed inset-0 w-full bg-white z-20' : 'hidden'} md:hidden transition-all`}>
  <div className="flex items-center justify-between px-5 py-6 border-b transition-all duration-300">
    <img src={assets.logo} alt="Logo" className="w-32" />
    <img 
      src={assets.cross_icon} 
      alt="Close Menu" 
      className="w-6 cursor-pointer"  
      onClick={() => setshowMenu(false)}
    />
  </div>
  <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
    <NavLink onClick={()=>setshowMenu(false)} to="/" > <p className="px-4 py-2 rounded inline-block">HOME</p></NavLink>
    <NavLink onClick={()=>setshowMenu(false)} to="/doctors" ><p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p></NavLink>
    <NavLink onClick={()=>setshowMenu(false)} to="/about" ><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
    <NavLink onClick={()=>setshowMenu(false)} to="/contact" ><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
  </ul>


        </div>
      </div>
    </div>
  );
};
