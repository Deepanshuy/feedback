import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { sidebarLinks } from "../assets/data/sidebarlinks";
import * as icons from "react-icons/vsc";
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) ?? null;
  return (
    <div>
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        <>
          <div
            className="min-w-[222px] flex-col  lg:flex
        h-[calc[100vh-3.5rem)] bg-[#fcfcfc] py-10 custom-class hidden"
          >
            <div className="flex flex-col ">
              {sidebarLinks.map((link) => {
                if (link.type && user.accountType !== link.type) return null;
                let Icon = icons[link.icon];
                return (
                  <NavLink
                    to={link.path}
                    className="p-2 transition-all duration-200 ease-in hover:bg-[#e7e7e7] flex gap-x-2 items-center"
                    key={link.id}
                  >
                    <Icon fontSize={20} />
                    <p>{link.name}</p>
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="flex lg:hidden fixed bottom-0 justify-between bg-white items-center   z-50 w-full custom-class">
            <div className="flex flex-row gap-1 w-full justify-between ">
              {sidebarLinks.map((link) => {
                if (link.type && user.accountType !== link.type) return null;
                let Icon = icons[link.icon];
                return (
                  <NavLink
                    to={link.path}
                    className={(nav) =>
                      nav.isActive
                        ? "bg-[#c6c6c6] border-t-[#0a1f3c] border-t-[6px] p-2 transition-all duration-200 w-full ease-in justify-center hover:bg-[#e7e7e7] flex gap-x-2 items-center"
                        : "p-2 transition-all duration-200 ease-in hover:bg-[#e7e7e7]  w-full  flex gap-x-2 items-center justify-center"
                    }
                    key={link.id}
                  >
                    <Icon fontSize={24} />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </>
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
