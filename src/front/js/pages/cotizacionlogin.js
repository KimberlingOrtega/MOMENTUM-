import React from "react";
import { Form } from "../component/form";
import { Title } from "../component/title";
import Places from "./places";
import { Contacto } from "../component/contacto";

export const Cotizacionlogin = () => {
  return (
    <div className="px-0 pt-32 ">
      {/* <Title titulo="Datos" /> */}
      <div className="flex ">
        <div className="w-1/4 h-screen">
          <img
            className="h-screen object-cover"
            src="https://img.freepik.com/fotos-premium/pareja-joven-enamorados-al-aire-libre_507264-3736.jpg?w=740"
          />
        </div>
        <div className="w-3/4 mt-8">
            <div className="px-8 pt-">
            <div className="flex justify-center principal-title text-black font-bold mb-12">Nueva cotización</div>
                < Form />
            </div>
        </div>
      </div>
    </div>
  );
};
