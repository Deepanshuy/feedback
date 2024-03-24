import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  let user = JSON.parse(localStorage.getItem("user")) ?? null;
  const token = JSON.parse(localStorage.getItem("token")) ?? null;
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="bg-gradient-to-r p-6 relative -z-10 from-[#081C3A]  to-[#316F78] text-white flex flex-col font-bold rounded-xl text-xl">
      {user && (
        <div className="flex items-center p-5 md:gap-x-12 text-2xl gap-x-4">
          <img
            src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.name}`}
            alt="none"
            className="h-[6rem] w-[6rem] rounded-full"
          />
          <p>{user.name.toUpperCase()}</p>
        </div>
      )}
      <p className="p-6 text-2xl">Personal Details</p>
      <div className="p-6 flex flex-col gap-y-5 md:w-[65%]">
        <div className="flex  gap-y-3 md:flex-row flex-col md:items-center ">
          <div className="basis-[50%]">
            <p className="text-[#A6A6A6] font-medium text-sm ">Name</p>
            <p>{user.name.toUpperCase()}</p>
          </div>
          <div className="basis-[50%]">
            <p className="text-[#A6A6A6]  font-medium text-sm">Roll Number</p>
            <p>{user.rollNumber}</p>
          </div>
        </div>
        <div className="flex  gap-y-3  md:flex-row flex-col md:items-center ">
          <div className="basis-[50%]">
            <p className="text-[#A6A6A6] font-medium text-sm">Email</p>
            <p>{user.email}</p>
          </div>
          <div className="basis-[50%]">
            <p className="text-[#A6A6A6] font-medium text-sm">Course</p>
            <p >{user.course.toUpperCase()}</p>
          </div>
        </div>
        <div className="flex gap-y-3  md:flex-row flex-col md:items-center ">
          <div className="basis-[50%]">
            <p className="text-[#A6A6A6] font-medium text-sm">Branch</p>
            <p>{user.branch.toUpperCase()}</p>
          </div>
          <div className="basis-[50%]">
            <p className="text-[#A6A6A6] font-medium text-sm">Sem</p>
            <p>{user.sem}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
