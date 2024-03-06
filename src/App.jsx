import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./pages/component/Navbar";
import HomePage from "./pages/Home";
import Btech from "./pages/btech";
import Bvoc from "./pages/bvoc";
import Bsc from "./pages/bsc";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import AdminDashboard from "./pages/AdminDashboard";
import Requests from "./pages/Requests";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;
  const token = JSON.parse(localStorage.getItem("token")) ?? null;
  return (
    <div>
      <Navbar />
      <div className="mt-[8dvh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/btech" element={<Btech />} />
          <Route path="/bvoc" element={<Bvoc />} />
          <Route path="/bsc" element={<Bsc />} />
          <Route element={<Dashboard />}>
            <Route path="/dashboard/my-profile" element={<MyProfile />} />

            {user?.accountType === "Admin" && (
              <>
                <Route path="/dashboard/admin" element={<AdminDashboard />} />
                <Route path="/dashboard/requests" element={<Requests />} />
              </>
            )}
            {user?.accountType === "Student" && (
              <>
                <Route
                  path="/dashboard/student"
                  element={<StudentDashboard />}
                />
              </>
            )}
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
