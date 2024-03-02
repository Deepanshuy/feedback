import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="bg-[rgb(234,252,255);] h-screen w-[100%]">
      <p className="bg-[rgb(234,252,255);] text-black absolute h-[15rem] w-[60%] top-20 left-80 text-5xl p-12">
        
         "Empower Educators: Enhance Teaching Through Feedback Hub"
      </p>

<div className="absolute z-10  top-80 w-[100%] flex justify-center items-center text-lg ">
  <p>Select Your Respective Course</p>
</div>
      <div className="bg-green-200 h-[15rem]  w-[100%] absolute bottom-24 flex justify-around items-center">
       <Link to="/btech" className="bg-[#40afbf] p-2 text-lg w-[15%] flex justify-center items-center rounded-lg cursor-pointer">
         B.tech
         </Link>
         <Link to="/bvoc" className="bg-[#40afbf] p-2 text-lg w-[15%] flex justify-center items-center rounded-lg cursor-pointer">
         B.voc
         </Link>
         <Link to="/bsc" className="bg-[#40afbf] p-2 text-lg w-[15%] flex justify-center items-center rounded-lg cursor-pointer">
         B.sc
         </Link>
        </div>
      </div>
      
      
   
  )
}

export default HomePage;