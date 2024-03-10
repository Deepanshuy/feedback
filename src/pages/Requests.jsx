import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Requests = () => {
  const token = JSON.parse(localStorage.getItem("token")) ?? null;
  const [data, setData] = useState(null);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/delete`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        }
      );

      const res = await response.json();
      if (res.status === true) {
        toast.success("Request Deleted Successfully");
      }
      setData(res.students);
    } catch (e) {
      console.log(e);
      toast.error("Error While Fetching Data");
    }
  };

  const handleApprove = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/approve`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        }
      );

      const res = await response.json();
      if (res.status === true) {
        toast.success("Request Approved Successfully");
      }
      setData(res.students);
    } catch (e) {
      console.log(e);
      toast.error("Error While Fetching Data");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/getPendingStudents`
        );

        const res = await response.json();
        console.log(res.students);
        setData(res.students);
      } catch (e) {
        console.log(e);
        toast.error("Error While Fetching Data");
      }
    })();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center ">
        <p className="basis-[16.66%] ">Name</p>
        <p className="basis-[16.66%]">Course</p>
        <p className="basis-[16.66%]">Branch</p>
        <p className="basis-[16.66%]">Semester</p>
        <p className="basis-[16.66%]">Roll Number</p>
        <p className="basis-[16.66%]">Status</p>
      </div>
      <div>
        {data ? (
          data.map((item) => {
            return (
              <div
                key={item._id}
                className="flex p-3 gap-y-3 justify-between items-center"
              >
                <p className="basis-[16.66%]">{item.name}</p>
                <p className="basis-[16.66%]">{item.course}</p>
                <p className="basis-[16.66%]">{item.branch}</p>
                <p className="basis-[16.66%]">{item.sem}</p>
                <p className="basis-[16.66%]">{item.rollNumber}</p>
                <div className="basis-[16.66%] flex gap-x-2">
                  <div onClick={() => handleApprove(item._id)}>
                    <Button className="!bg-[#40afbf]" variant="contained" size="small">
                      Approve
                    </Button>
                  </div>
                  <div className="cursor-pointer " onClick={() => handleDelete(item._id)}>
                    <Delete className="!text-[#40afbf]" fontSize="small" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex h-[35rem] justify-center items-center">
            <p className="text-6xl">No Requests</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
