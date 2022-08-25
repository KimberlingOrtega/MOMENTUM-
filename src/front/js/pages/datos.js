import React from "react";
import { Title } from "../component/title";

export const Datos = () => {
  return (
    <div className="px-0 pt-32 ">
      <Title titulo="Datos" />
      <div className="h-screen flex justify-center">
        <div className="">
          <div className="mt-5 border-solid border-2 px-10 py-2">
            <p className="text-lg">Nombre completo : </p>{" "}
            <input
              className="mr-0"
              type="text"
              name="name"
              required
              size="25"
            ></input>
            <p className="text-lg">Correo: </p>{" "}
            <input
              className="mr-0"
              type="text"
              name="name"
              required
              size="25"
            ></input>
            <p className="text-lg">Número telefónico: </p>{" "}
            <input
              className="mr-0"
              type="text"
              name="name"
              required
              size="25"
            ></input>
            <br></br>
            <button className="mt-2 bg-sky-500 hover:bg-sky-700 ...">
              Save changes
            </button>
          </div>
          <div className="mt-5 border-solid border-2 px-10 py-2">
            <p className="text-lg">Contraseña actual: </p>{" "}
            <input
              className="mr-0"
              type="text"
              name="name"
              required
              size="25"
            ></input>
            <p className="text-lg">Nueva contraseña: </p>{" "}
            <input
              className="mr-0"
              type="text"
              name="name"
              required
              size="25"
            ></input>
            <p className="text-lg">Repetir nueva contraseña: </p>{" "}
            <input
              className="mr-0"
              type="text"
              name="name"
              required
              size="25"
            ></input>
            <br></br>
            <button className="mt-2 bg-sky-500 hover:bg-sky-700 ...">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
