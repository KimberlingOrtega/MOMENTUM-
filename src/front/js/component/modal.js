import React from "react";
import { Form } from "./form";

export const Modal = () => {
  return (
    <div className="formulario w-full h-60 mt-3">
      <p className="text-title text-3xl flex justify-center items-center h-1/4 w-6/12 mx-auto bg-white mb-2 text-slate-500 font-bold">
      ¿Estás buscando un fotógrafo o la foto adecuada?
      </p>
      <hr className="hr-line" />
      <p className="text-title text-xl flex justify-center items-center w-7/12 mx-auto text-gray-400 font-semibold h-1/4 px-16 mt-3 mb-3">
      CUÉNTAME SOBRE TU PROYECTO:
SESIÓN FOTOGRÁFICA, ENVÍO, REPORTAJE, FOTOGRAFÍA DE ACCIÓN, MODA, ALIMENTACIÓN, RETRATO CORPORATIVO, SERVICIO INDUSTRIAL...
JUNTOS ENCONTRAREMOS LA SOLUCIÓN ADECUADA.
      </p>
      <div className="flex justify-center">
      <button
        type="button"
        className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      h-10
      flex justify-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalLg"
      >
        Contáctame
      </button>
      </div>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalLg"
        tabIndex="-1"
        aria-labelledby="exampleModalLgLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body relative p-4">
              <Form />
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
