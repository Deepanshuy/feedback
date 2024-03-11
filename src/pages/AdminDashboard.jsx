import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;
  const navigate = useNavigate();
  useEffect(() => {
    if (user.accountType !== "Admin") {
      navigate("/login");
    }
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/getFeedback`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              teacher: "Dr. Pooja Dhand",
            }),
          }
        );

        const res = await response.json();
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
