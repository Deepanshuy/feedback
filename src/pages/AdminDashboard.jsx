import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;
  const navigate = useNavigate();
  useEffect(() => {
    if (user.accountType !== "Admin") {
      navigate("/login");
    }
  });
  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
