import React from "react";
import { Form } from "../pages/Form";
export const Cotizacion = () => {
  return (
    <div className="px-0 pt-32 flex">
      <div className="grow bg-pink-500">
        <p>Sándra Sanchez</p>
      </div>
      <div className="grow bg-slate-400">
        <Form />
      </div>
    </div>
  );
};
