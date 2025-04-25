import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {
    const {AdminToken,setAdminToken}=useContext(AdminContext)
    const {doctorToken,setDoctorToken}=useContext(DoctorContext)
    const navigate=useNavigate()
    const logout=()=>
    {
        navigate('/')
        AdminToken&&setAdminToken('')
        AdminToken&&localStorage.removeItem('AdminToken')
        doctorToken&&setDoctorToken('')
        doctorToken&&localStorage.removeItem('doctorToken')

    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex items-center gap-2 text-xs'>
            <img src={assets.Adminlogo} alt={assets.Adminlogo} srcset="" className='w-36 sm:w-40 cursor-pointer'/>
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{AdminToken?'Admin':'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-blue-500 text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar