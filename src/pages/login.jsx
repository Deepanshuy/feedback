import { ReactTyped } from "react-typed";
import login1 from "/loginpics/login1.svg";
import logo from "/loginpics/logolkc.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import ConvoImg from "/loginpics/convo.jpg";
const Login = () => {
  const token = JSON.parse(localStorage.getItem("token")) ?? null;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const changeHandler = () => {
    setShow(!show);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const res = await response.json();
      if (res.message.approved === true) {
        toast.success("Login Successful");
        localStorage.setItem("token", JSON.stringify(res.message.token));
        localStorage.setItem("user", JSON.stringify(res.message));
        navigate("/dashboard/my-profile");
      }
      if (res.message.approved === false) {
        toast.error("Your Account is not approved");
      }
      if (!res.status) {
        toast.error(res.message);
      }

      console.log(res);
    } catch (e) {
      console.log(e);
      toast.error("Login Error");
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/dashboard/my-profile");
    }
  }, []);

  return (
    <div className="w-screen flex justify-center items-center h-screen p-5 ">
      <div className="relative rounded-3xl bg-[#275c69] p-4 w-fit md:w-[60%]">
        <div className="w-full  mx-auto  flex overflow-hidden rounded-2xl  bg-white ">
          <div className="md:w-[70rem]  md:block loginImg  h-full hidden overflow-hidden ">
            <img
              src={ConvoImg}
              className="object-cover w-full h-full"
              alt="login"
            />
          </div>
          <div className="flex  mt-8 flex-col  justify-between h-[50%] p-4 md:w-[60%] w-full ">
            <div className="w-full">
              <img src={logo} className="object-cover " alt="login" />
            </div>
            <div className="p-3 font-semibold">
              <ReactTyped
                strings={["We are welcoming you ", "In LKCTC"]}
                typeSpeed={40}
                backSpeed={40}
                backDelay={2}
                loop
              />
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col p-3 gap-y-5"
              >
                <div className="flex flex-col gap-y-8">
                  <div className=" flex flex-col gap-y-2">
                    {/* <label htmlFor="email" className=" text-sm">Enter Your Email <span className="text-red-500 text-lg">*</span>: </label>   */}
                    <TextField
                      id="email"
                      label="Enter Your Email"
                      variant="outlined"
                      onChange={handleChange}
                      value={formData.email}
                      size="small"
                      type="email"
                      name="email"
                      className="w-full"
                    />
                  </div>
                  <div className="relative flex flex-col gap-y-2">
                    {/* <label htmlFor="password" className=" text-sm">Enter password <span className="text-red-500 text-lg">*</span>: </label>   */}
                    <TextField
                      id="password"
                      label="Enter Password"
                      variant="outlined"
                      size="small"
                      value={formData.password}
                      onChange={handleChange}
                      name="password"
                      type={show ? "text" : "password"}
                      className="w-full"
                    />
                    <div
                      onClick={changeHandler}
                      className="absolute right-3 bottom-2 cursor-pointer "
                    >
                      {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </div>
                  </div>
                </div>

                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  className="!bg-[#1e93ff] !w-full"
                >
                  log in
                </Button>
              </form>
            </div>
            <p className="text-xs mx-auto">
              Don't have account?{" "}
              <Link to="/signup" className="text-[#403fff] cursor-pointer">
                Create Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
