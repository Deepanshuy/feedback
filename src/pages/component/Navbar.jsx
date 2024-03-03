import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
const Navbar = () => {
  let token = JSON.parse(localStorage.getItem("token")) ?? null;
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    token = null;
    navigate("/login");
  };
  return (
    <div className="h-[8dvh] w-screen fixed top-0 bg-[#40afbf] text-white font-medium flex justify-between items-center p-6 z-10">
      <div className="p-2">
        <span className=" border-2 border-black bg-white rounded-md  p-1 text-black">
          {" "}
          FEEDBACK HUB
        </span>
      </div>
      <div className="md:flex items-center gap-x-4 hidden">
        {!token && (
          <Link
            to="/login"
            className="flex gap-x-1 justify-center items-center p-2"
          >
            <p>Login</p>
            <MdOutlineLogin fontSize={24} />
          </Link>
        )}

        {!token && (
          <Link
            to="/signup"
            className="flex gap-x-1 justify-center items-center  p-2"
          >
            <p>Register</p>
            <GiNotebook fontSize={24} />
          </Link>
        )}
        {token && (
          <div

            onClick={logoutHandler}
            className="flex gap-x-1 justify-center cursor-pointer items-center p-2"
          >
            <p>LogOut</p>
            <MdOutlineLogin fontSize={24} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
