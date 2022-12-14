import React, { useContext, useEffect } from "react";
import Logo from "../../img/logo-fotografo.png";
import { Login } from "./login";
import { Usermenu } from "./usermenu";
import { Adminmenu } from "./adminmenu";
import { Context } from "../store/appContext";
// Automatizar Adminmenu/Usermenu al realizar el login dependiendo si is_admin es verdadero o falso (si es verdadero es admin)

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let token = localStorage.getItem("token");
  let is_admin = JSON.parse(localStorage.getItem("is_admin"));
  console.log(typeof is_admin);
  useEffect(() => {
    console.log(is_admin, "Line 15");
  }, []);
  return (
    <div className="relative">
      <div className="shadow-md w-full fixed top-0 flex justify-center bg-white ">
        <div className="">
          <img className="object-cover w-40 h-20" src={Logo} />
        </div>
      </div>
      <div className="absolute right-0 flex items-center h-20 mx-4">
        {store.token === null ? (
          <Login />
        ) : store.is_admin && store.is_admin == true ? (
          <Adminmenu />
        ) : (
          <Usermenu />
        )}
      </div>
    </div>
  );
};
