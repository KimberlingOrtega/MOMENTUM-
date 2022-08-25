import React from "react";
import Logo from "../../img/logo-fotografo.png";
import { Login } from "./login";
import { Usermenu } from "./usermenu";
import { Adminmenu } from "./adminmenu";

export const Navbar = () => {
  return (
    <div className="relative">
      <div className="shadow-md w-full fixed top-0 flex justify-center bg-white opacity-80">
        <div className="">
          <img className="object-cover w-40 h-20" src={Logo} />
        </div>
      </div>
      <div className="absolute right-0 flex items-center h-20 mx-4">
        <Adminmenu admin="Roberto De Freitas" />
        <Login />
      </div>
    </div>
  );
};
