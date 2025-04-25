import React, { useContext } from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import Allappointments from './pages/Admin/Allappointments';
import AddDoctor from './pages/Admin/AddDoctor';
import Doctorlist from './pages/Admin/Doctorlist';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctors/DoctorDashboard';
import DoctorAppointments from './pages/Doctors/DoctorAppointments';
import DoctorProfile from './pages/Doctors/DoctorProfile';
const App = () => {
  const {AdminToken}=useContext(AdminContext)
  const {doctorToken}=useContext(DoctorContext)
  return AdminToken || doctorToken ? (
    <div className='bg-white'>
      
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* ADMIN ROUTES || ADMIN PANEL */}
          <Route path='/' element={<></>}/> 
          <Route path='/admin-Dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<Allappointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<Doctorlist/>}/>
          {/* DOCTOR ROUTES || DOCTOR PANEL */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-appointments' element={<DoctorAppointments/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>
        </Routes>
      </div>


    </div>
  ):(
    <>
    <Login/>
      <ToastContainer/>

    </>
  )
}

export default App