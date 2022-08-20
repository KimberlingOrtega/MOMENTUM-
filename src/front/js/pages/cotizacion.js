import React from "react";
import { Form } from "./form";
import { Title } from "../component/title";

export const Cotizacion = () => {
  return (
    <div className="px-0 pt-32">
      <Title titulo="Cotización" />
      <div className=" flex h-screen ">
        <div className="grow w-2/4">
          <p>Sándra Sanchez</p>
        </div>
        <div className="grow bg-slate-400 w-2/4 pt-4 ">
          <p className="pt-4 text-title text-3xl flex justify-center items-center  w-6/12 mx-auto  mb-2 text-slate-500 font-bold">
            Food, Beverage, Still Life ... the good to photograph
          </p>
          <p className="text-title text-xl flex justify-center items-center w-10/12 mx-auto text-teal-600 font-semibold  px-16 mt-3 mb-3">
            Commercial images for restaurants, menus, catalogs, cookbooks, food
            companies, producers, farms, blogs and food sector publishing.
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
