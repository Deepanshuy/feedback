import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import toast from "react-hot-toast";
const MyProfile = () => {
  let user = JSON.parse(localStorage.getItem("user")) ?? null;
  const token = JSON.parse(localStorage.getItem("token")) ?? null;
  const [checked, setChecked] = useState(false);

  const handleChange = async (event) => {
    setChecked(event.target.checked);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/updateAllowFeedback`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            allow: !checked,
          }),
        }
      );

      const res = await response.json();
      console.log(res);
    } catch (e) {
      console.log(e);
      toast.error("Update Error");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    if (user.accountType === "Admin") {
      (async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_APP_BASE_URL}/updateAllowFeedback`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: user.email,
              }),
            }
          );

          const res = await response.json();
          console.log(res);
          setChecked(res.allow.allowFeedback);
        } catch (e) {
          console.log(e);
          toast.error("Update Error");
        }
      })();
    }
  }, []);
  return (
    <div className="bg-gradient-to-r p-6 relative  from-[#081C3A]  to-[#316F78] text-white flex flex-col font-bold rounded-xl text-xl">
      {user.accountType === "Admin" && (
        <div className="cursor-pointer ml-auto">
          <label htmlFor="Allow Feedback">Allow Feedback</label>
          {
            <Switch
              checked={checked}
              onChange={handleChange}
              id="Allow Feedback"
            />
          }
        </div>
      )}
      {user && (
        <div className="flex items-center p-5 md:gap-x-10 text-2xl gap-x-4">
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
            <p>{user.name}</p>
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
            <p>{user.course.toUpperCase()}</p>
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
