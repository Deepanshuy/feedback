import React from "react";
import logo from "../../../public/loginpics/logolkc.svg";
const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="h-[9dvh] w-screen bg-[#40afbf] custom-class flex justify-center items-center">

      <p className="font-semibold text-sm">
        Copyright © {currentYear}- Created By- Deepanshu, Ansh, Zeeshan (CSE 6th Semester)
      </p>
    </div>
  );
};

export default Footer;
