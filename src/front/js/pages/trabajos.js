import React from "react";
import { Title } from "../component/title";

export const Trabajos = () => {
  return (
    <div className="px-0 pt-32 ">
      {/* <Title titulo="Registro de clientes" /> */}
      <div className="flex ">
        <div className="w-1/4 h-screen">
          <img
            className="h-screen object-cover"
            src="https://img.freepik.com/foto-gratis/tiro-largo-bonita-mujer-posando-studio_23-2148532564.jpg?w=740&t=st=1662067213~exp=1662067813~hmac=47b6e344434539d329554ffcda5c8485116f209bff20fd7317bb6f0bfb77caf3"
          />
        </div>
        <div className="w-3/4 mt-8">
          <div className="">
            <div className="flex justify-center principal-title text-black font-bold">Trabajos realizados</div>
            <div className="flex items-center justify-center mt-10">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
