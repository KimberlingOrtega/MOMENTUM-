import React from "react";

export const Form = () => {
  return (
    <form className="w-full ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="First name/Last name"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="City/Province"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="E-mail"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Telefono"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-4 md:mb-0">
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htlmfor="grid-state"
            >
              Selecciona un servicio.
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Boda</option>
              <option>Evento Nocturno</option>
              <option>Cocina</option>
              <option>Corporativo</option>
              <option>Moda</option>
            </select>
          </div>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <textarea
            className="
form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
    </form>
  );
};
