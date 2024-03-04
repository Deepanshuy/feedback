import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const token = JSON.parse(localStorage.getItem("token")) ?? null;
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return <div>MyProfile</div>;
};

export default MyProfile;
