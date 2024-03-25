import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
const Navbar = () => {
  let token = JSON.parse(localStorage.getItem("token")) ?? null;
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    token = null;
    navigate("/login");
  };
  return (
    <div className="h-[8dvh] w-screen fixed top-0 bg-gradient-to-r md:p-6 p-3 from-[#0a1f3c]  to-[#275c69] text-white font-medium flex justify-between items-center  z-[60] custom-class">
      <Link
        to={"/"}
        onClick={() => setOpen(false)}
        className="p-5 border-6 border-black"
      >
        <div className="flex items-center justify-center gap-1">
          <h2>feedback Hub</h2>
          <TextsmsIcon className="!text-[#FBDE5A] p-0" />
        </div>
      </Link>
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
          <Link
            to={"/dashboard/my-profile"}
            className="flex gap-x-1 justify-center cursor-pointer items-center p-2"
          >
            <p>Dashboard</p>
            <MdOutlineDashboardCustomize fontSize={24} />
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
      <div title="Menu" className="md:hidden">
        <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className=" flex-col items-center gap-x-4 fixed top-[8dvh] bg-white text-black  left-0 w-full h-[95%] md:hidden ">
          {!token && (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex gap-x-1 justify-center items-center p-2"
            >
              <p>Login</p>
              <MdOutlineLogin fontSize={24} />
            </Link>
          )}

          {!token && (
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="flex gap-x-1 justify-center items-center  p-2"
            >
              <p>Register</p>
              <GiNotebook fontSize={24} />
            </Link>
          )}
          {token && (
            <Link
              to={"/dashboard/my-profile"}
              onClick={() => setOpen(false)}
              className="flex gap-x-1 justify-center cursor-pointer items-center p-2"
            >
              <p>Dashboard</p>
              <MdOutlineDashboardCustomize fontSize={24} />
            </Link>
          )}
          {token && (
            <div
              onClick={() => {
                logoutHandler();
                setOpen(false);
              }}
              className="flex gap-x-1 justify-center cursor-pointer items-center p-2"
            >
              <p>LogOut</p>
              <MdOutlineLogin fontSize={24} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
