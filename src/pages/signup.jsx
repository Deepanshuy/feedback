import { ReactTyped } from "react-typed";
import login1 from "/loginpics/login1.svg";
import logo from "/loginpics/logolkc.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ConvoImg from "/loginpics/convo.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token")) ?? null;
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const changeHandler = () => {
    setShow(!show);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    course: "",
    branch: "",
    rollNumber: "",
    sem: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const data = [
    {
      course: "btech",
      branch: "cse",
    },
    {
      course: "btech",
      branch: "ds",
    },
    {
      course: "btech",
      branch: "ece",
    },
    {
      course: "btech",
      branch: "ce",
    },
    {
      course: "btech",
      branch: "me",
    },
    {
      course: "bsc",
      branch: "gwd",
    },
    {
      course: "bvoc",
      branch: "sd",
    },
    {
      course: "bvoc",
      branch: "as",
    },
    {
      course: "diploma",
      branch: "cse",
    },
    {
      course: "diploma",
      branch: "me",
    },
    {
      course: "diploma",
      branch: "ece",
    },
    {
      course: "diploma",
      branch: "ce",
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const res = await response.json();
      console.log(res);
      if (res.status) {
        toast.success("Signup Successful");
        navigate("/login");
      }
      if (!res.status) {
        toast.error(res.message);
      }

      console.log(res);
    } catch (e) {
      console.log(e);
      toast.error("Sign up Error");
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/dashboard/my-profile");
    }
  }, []);
  let session;
  const current = new Date();
  const month = current.getMonth();
  if (month >= 0 && month <= 5) {
    session = "even";
  } else {
    session = "odd";
  }
  return (
    <div className="w-screen mt-[8rem] md:mt-0 flex justify-center items-center h-screen">
      <div className="relative bg-[#275c69]  md:w-[60%] p-3 rounded-2xl">
        <div className=" bg-white mx-auto  flex justify-center items-center overflow-hidden rounded-2xl  border-[#275c69]  border-4">
          <div className="  md:block border-black loginImg w-[60%] h-[30rem] hidden overflow-hidden">
            <img
              src={ConvoImg}
              className="w-full object-cover h-full "
              alt="login"
            />
          </div>
          <div className="flex  flex-col  justify-between p-4 md:w-[60%] h-full">
            <div className="w-full ">
              <img src={logo} className="object-cover mx-auto" alt="login" />
            </div>
            <div className="p-3 font-bold">
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
                <div className="flex flex-col gap-y-6">
                  <div className=" flex md:flex-row flex-col gap-y-6  md:gap-x-4">
                    {/* <label htmlFor="email" className=" text-sm">Enter Your Email <span className="text-red-500 text-lg">*</span>: </label>   */}
                    <TextField
                      id="name"
                      label="Enter Your Name"
                      variant="outlined"
                      onChange={handleChange}
                      value={formData.name}
                      size="small"
                      type="text"
                      name="name"
                      className="w-full"
                    />
                    <TextField
                      id="rollNumber"
                      label="Enter Your Roll Number"
                      variant="outlined"
                      onChange={handleChange}
                      value={formData.rollNumber}
                      size="small"
                      type="number"
                      name="rollNumber"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-x-2 gap-y-6">
                    <FormControl fullWidth size="small">
                      <InputLabel id="course">Course</InputLabel>
                      <Select
                        labelId="course"
                        id="course"
                        name="course"
                        size="small"
                        value={formData.course}
                        label="Course"
                        onChange={handleChange}
                      >
                        <MenuItem value={"btech"}>B.Tech</MenuItem>
                        <MenuItem value={"bsc"}>B.Sc</MenuItem>
                        <MenuItem value={"bvoc"}>B.Voc</MenuItem>
                        <MenuItem value={"diploma"}>Diploma</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl size="small" fullWidth>
                      <InputLabel id="branch">Branch</InputLabel>
                      <Select
                        labelId="branch"
                        id="branch"
                        name="branch"
                        size="small"
                        value={formData.branch}
                        label="Branch"
                        onChange={handleChange}
                      >
                        {data
                          .filter((item) => item.course === formData.course)
                          .map((item, index) => (
                            <MenuItem key={index} value={item.branch}>
                              {item.branch.toUpperCase()}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth size="small">
                      <InputLabel id="sem">Semester</InputLabel>
                      <Select
                        labelId="sem"
                        id="sem"
                        name="sem"
                        size="small"
                        value={formData.sem}
                        label="Semester"
                        onChange={handleChange}
                      >
                        {session === "even" &&
                          ["2nd", "4th", "6th", "8th"].map(
                            (item, index) =>
                              formData.branch && (
                                <MenuItem key={index} value={item}>
                                  {item}
                                </MenuItem>
                              )
                          )}
                        {session === "odd" &&
                          ["1st", "3rd", "5th", "7th"].map(
                            (item, index) =>
                              formData.branch && (
                                <MenuItem key={index} value={item}>
                                  {item}
                                </MenuItem>
                              )
                          )}
                      </Select>
                    </FormControl>
                  </div>
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
                  <div className="flex w-full gap-x-4 flex md:flex-row flex-col gap-y-6  md:gap-x-4">
                    <div className="relative flex flex-col gap-y-2 w-full">
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
                    <div className="relative flex flex-col gap-y-2 w-full">
                      {/* <label htmlFor="password" className=" text-sm">Enter password <span className="text-red-500 text-lg">*</span>: </label>   */}
                      <TextField
                        id="confirmPassword"
                        label="Re-Enter Password"
                        variant="outlined"
                        size="small"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        name="confirmPassword"
                        type={showConfirm ? "text" : "password"}
                        className="w-full"
                      />
                      <div
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 bottom-2 cursor-pointer "
                      >
                        {showConfirm ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  className="!bg-[#1e93ff] !w-full"
                >
                  register now
                </Button>
              </form>
            </div>
            <p className="text-xs mx-auto">
              Already have account?{" "}
              <Link to="/login" className="text-[#403fff] cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
