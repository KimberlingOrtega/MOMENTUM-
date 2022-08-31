import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="shadow-md w-full fixed top-20 flex justify-center h-12 bg-white ">
      <div className="">
        <ul className="flex space-x-7 text-4xl font-bold mt-1 ">
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/biografia">Biografía</Link>
          </li>

          <li>
            <Link to="/boda">Bodas</Link>
          </li>

          <li>
            <Link to="/evento">Eventos</Link>
          </li>

          <li>
            <Link to="/comida">Comida</Link>
          </li>

          <li>
            <Link to="/corporativo">Corporativo</Link>
          </li>

          <li>
            <Link to="/moda">Moda</Link>
          </li>

          <li>
            <Link to="/cotizacion">Cotización/Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
