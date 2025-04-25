import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const Doctorlist = () => {
  const { doctors, AdminToken, getAllDoctors, changeAvailabilitiy } = useContext(AdminContext);

  useEffect(() => {
    if (AdminToken) {
      getAllDoctors();
    }
  }, [AdminToken]);
  return <div className="m-5 max-h-[90vh] overflow-y-scroll">
    <h1 className="text-lg font-medium">All Doctors</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
  {doctors.map((item, index) => (
    <div key={index} className="border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group">
    <img src={item.image} alt="" className="group-hover:scale-105  duration-500 ease-in-out h-56 w-full transition-all "/>
    <div className="p-4">
      <p className="text-neutral-800 text-lg font-medium">{item.name}</p>
      <p className="text-zinc-600 text-sm">{item.speciality}</p>
      <div className="mt-2 flex items-center gap-1 text-sm">
        <input type="checkbox" checked={item.available} onChange={()=>changeAvailabilitiy(item._id)} />
        <p>
          Available
        </p>
      </div>
    </div>
  </div>
      ))}
</div>

  </div>;
};

export default Doctorlist;
