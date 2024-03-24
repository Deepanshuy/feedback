import TextsmsIcon from "@mui/icons-material/Textsms";
import { FaLock } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="h-[9dvh] w-screen custom-class flex flex-col justify-center items-center z-50">
        <div className="h-full w-full bg-[#173a50] flex justify-between items-center px-6 py-3">
          <div className="flex gap-x-2 justify-center items-center">
            <FaLock fontSize={24} />
            <p className="text-white">Providing Security for students</p>
          </div>
          <div className="flex items-center text-white justify-center gap-1">
            <h2>feedback Hub</h2>
            <TextsmsIcon className="!text-[#FBDE5A] p-0" />
          </div>
        </div>
        <div className="md:h-[1.4rem] w-full bg-[#173a50] text-white text-xs p-2 items-center text-center flex justify-center">
          ©Copyright. All rights reserved to Ansh, Zeeshan, and Deepanshu-
          B.tech(CSE-6th)
        </div>
      </div>
      <div className="lg:hidden h-[9dvh] "></div>
    </>
  );
};

export default Footer;
