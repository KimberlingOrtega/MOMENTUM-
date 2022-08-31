import React from "react";
import { Form } from "../component/form";
import { Title } from "../component/title";
import Places from "./places";

export const Cotizacion = () => {
  return (
    <div className="px-0 pt-32">
      <Title titulo="Cotización" />
      <div className=" flex h-screen ">
        <div className="grow bg-white-400 w-2/4 pt-4 ">
          <p className="pt-4 text-title text-3xl flex justify-center items-center  w-6/12 mx-auto  mb-2 text-slate-500 font-bold">
            Sándra Sanchez
          </p>
          <p className="text-title text-xl flex justify-center items-center w-10/12 mx-auto text-teal-600 font-semibold  px-16 mt-3 mb-3"></p>
          <p className="text-title text-xl flex justify-center items-center w-10/12 mx-auto font-semibold  px-16 mt-3 mb-3">
            <i className="fab fa-linkedin text-5xl"></i>
            <i className="fa-brands fa-square-facebook text-5xl"></i>
            <i className="fa-brands fa-square-instagram text-5xl"></i>
          </p>
        </div>

        <div className="grow bg-slate-400 w-2/4 pt-4 ">
          <p className="pt-4 text-title text-3xl flex justify-center items-center  w-6/12 mx-auto  mb-2 text-slate-500 font-bold">
            Alimentos, bebidas, bodegones ... lo bueno de fotografiar
          </p>
          <p className="text-title text-xl flex justify-center items-center w-10/12 mx-auto text-teal-600 font-semibold  px-16 mt-3 mb-3">
            Imágenes comerciales para restaurantes, menús, catálogos, libros de
            cocina, empresas empresas, productores, granjas, blogs y
            publicaciones del sector alimentario.
          </p>
          <hr className="hr-line mb-4" />
          <div className="px-10">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
