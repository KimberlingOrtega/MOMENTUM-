import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
export const Adminmenu = ({ admin }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (actions.logOut()) {
      navigate("/");
    }
  };
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-bars"></i>
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
            <Link className="dropdown-item" to="/" onClick={handleLogOut}>
              Salir
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
