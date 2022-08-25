import React from "react";
import { Link } from "react-router-dom";

export const Adminmenu = ({ admin }) => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {admin}
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/datos">
              Datos
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/clientes">
              Clientes
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admin">
              Trabajos realizados
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
