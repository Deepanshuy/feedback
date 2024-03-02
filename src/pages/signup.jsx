import {ReactTyped} from "react-typed"
import login1 from "../../public/loginpics/login1.svg"
import logo from "../../public/loginpics/logolkc.svg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
const Signup=()=>{
    const [show,setShow]=useState(false)
    const changeHandler=()=>{
        setShow(!show)
    }
    return (
        <div className="w-screen flex justify-center items-center">
            <div className="w-[60%] h-[25rem] md:mt-16 mt-16  mx-auto  flex justify-center items-center overflow-hidden rounded-2xl  border-[#40afbf] border-4">
                   <div className="  md:block loginImg   hidden overflow-hidden">
                        <img src={login1} className="object-cover" alt="login"/>
                   </div>
                   <div className="flex  flex-col  justify-between p-4 w-[60%] h-full">
                       <div className="w-full ">
                       <img src={logo} className="object-cover mx-auto" alt="login"/>
                       </div>
                        <div className="p-3">
                        <ReactTyped strings={["We are welcoming you ","In LKCTC"]} typeSpeed={40} backSpeed={40} backDelay={2} loop />
                        </div>
                        <div>
                            <form action="" className="flex flex-col p-3 gap-y-5" >
                              <div className="flex flex-col gap-y-8">
                                <div className=" flex flex-col gap-y-2">
                                {/* <label htmlFor="email" className=" text-sm">Enter Your Email <span className="text-red-500 text-lg">*</span>: </label>   */}
                            <TextField id="email" label="Enter Your Email" variant="outlined" size="small" type="email" className="w-full" />
                                </div>
                            <div className="relative flex flex-col gap-y-2" >
                            {/* <label htmlFor="password" className=" text-sm">Enter password <span className="text-red-500 text-lg">*</span>: </label>   */}
                            <TextField id="password" label="Enter Password" variant="outlined" size="small" type={show?"text":"password"} className="w-full"/>
                            <div onClick={changeHandler} className="absolute right-3 bottom-2 cursor-pointer ">
                               {show?  <VisibilityOffIcon/> :<VisibilityIcon/>}
                            </div>
                            </div>
                            </div>
                           
                     <Link to="/dashboard" className="w-full mx-auto mt-4">
                     <Button variant="contained" size="small" className="!bg-[#40afbf] !w-full">sign up</Button>
                     </Link>
                            </form>
                         
                        </div>
                   <p className="text-xs mx-auto">Don't have account? <Link to="/signup" className="text-[#403fff] cursor-pointer">Create Now</Link></p>
                   </div>
            </div>
         

        </div>
    )
}

export default Signup;