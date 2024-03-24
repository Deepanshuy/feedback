import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./pages/component/Navbar";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import AdminDashboard from "./pages/AdminDashboard";
import Requests from "./pages/Requests";
import Records from "./pages/Records";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import StudentDashboard from "./pages/StudentDashboard";
import Footer from "./pages/component/Footer";

function App() {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;
  const token = JSON.parse(localStorage.getItem("token")) ?? null;
  return (
    <div>
      <Navbar />
      <div className="mt-[8dvh] relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Dashboard />}>
            <Route path="/dashboard/my-profile" element={<MyProfile />} />

            <>
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route path="/dashboard/requests" element={<Requests />} />
              <Route path="/dashboard/record" element={<Records />} />
            </>

            <>
              <Route path="/dashboard/student" element={<StudentDashboard />} />
            </>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
