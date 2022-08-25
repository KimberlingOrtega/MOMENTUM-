import React from "react";
import { Link } from "react-router-dom";

export const Usermenu = ({ cliente }) => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {cliente}
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/datos">
              Datos
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/trabajos">
              Trabajos realizados
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/cotizacion">
              Nueva cotización
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Salir
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
