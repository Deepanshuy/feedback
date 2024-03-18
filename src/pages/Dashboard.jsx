import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { sidebarLinks } from "../assets/data/sidebarlinks";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;

  return (
    <div>
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        <div
          className="min-w-[222px] flex-col  lg:flex
        h-[calc[100vh-3.5rem)] bg-[#fcfcfc] py-10 custom-class" 
        >
          <div className="flex flex-col ">
            {sidebarLinks.map((link) => {
              if (link.type && user.accountType !== link.type) return null;
              return (
                <NavLink to={link.path} className="p-2 transition-all duration-200 ease-in hover:bg-[#e7e7e7]" key={link.id}>
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="mx-auto w-11/12 max-w-[1000px] py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
