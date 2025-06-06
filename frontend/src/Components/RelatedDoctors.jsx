import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {
    const {doctors}=useContext(AppContext)
    const [RelDoc,setRelDocs]=useState([])
    const navigate=useNavigate()
    useEffect(()=>
    {
        if(doctors.length>0 && speciality) 
        {
            const doctorsdata=doctors.filter((doc)=>doc.speciality===speciality &&doc._id!==docId)
            setRelDocs(doctorsdata)

        }

    },[doctors,speciality,docId])
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
    <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
    <p className="sm:w-1/3 text-center text-sm">
      Simply browse through our extensive list of trusted doctors.
    </p>
    <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
      {RelDoc.slice(0,5).map((item, index) => (
        <div
        onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
          key={index}
          className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
        >
          <img
            src={item.image}
            alt={`Dr. ${item.name}`}
            className="bg-blue-50 h-[250px] w-full "
          />
          <div className="p-4">
          <div className={`flex items-center gap-2 text-sm ${item.available?"text-green-500":'text-red-500'} `}>
                <span className={`w-2 h-2 ${item.available ?' bg-green-500 rounded-full':'bg-red-500 rounded-full'}`}></span>
                <p>{item.available ?'Available':'Not Available'}</p>
              </div>
            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
            <p className="text-gray-600 text-sm ">{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>
    <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className="bg-blue-600 text-gray-900 px-12 py-3 rounded-full mt-10" >
      More
    </button>
  </div>
  )
}

export default RelatedDoctors