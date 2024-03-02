import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLogin } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className='h-[8dvh] w-screen fixed top-0 bg-[#40afbf] text-white font-medium flex justify-between items-center p-6 z-10'  >
        <div className='p-2'>
          <span className=' border-2 border-black bg-white rounded-md  p-1 text-black' > FEEDBACK HUB</span>
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