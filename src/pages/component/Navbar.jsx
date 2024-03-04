import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLogin } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import feedbackLogo from "../../../public/logo/feedbackLogo.png"
const Navbar = () => {
  return (
    <div className='h-[8dvh] w-screen fixed top-0 bg-[#40afbf] text-white font-medium flex justify-between items-center p-6 z-10'  >
        <div className='p-2 border-6 border-black h-[5rem] w-[12rem]'>
         <img src={feedbackLogo} alt="feedbacklogo" className='object-cover h-full w-full ' />
        </div>
        <div className='md:flex items-center gap-x-4 hidden'>
             <Link to="/login" className='flex gap-x-1 justify-center items-center p-2'>
             <p>
                Login
             </p>
             <MdOutlineLogin  fontSize={24} />
             </Link>

             <Link to="/register" className='flex gap-x-1 justify-center items-center  p-2'>
             <p>
                Register
             </p>
             <GiNotebook fontSize={24} />
             </Link>
        </div>
    </div>
  )
}

export default Navbar