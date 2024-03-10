import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import feedbackLogo from "../../../public/logo/feedbackLogo.png";
import { MdOutlineDashboardCustomize } from "react-icons/md";

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
      <Link to={"/"} className="p-2 border-6 border-black h-[5rem] w-[12rem]">
        <img
          src={feedbackLogo}
          alt="feedbacklogo"
          className="object-cover h-full w-full  "
        />
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
    </div>
  );
};

export default Navbar;
