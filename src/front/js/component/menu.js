import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="shadow-md w-full fixed top-20 flex justify-center h-12 bg-white opacity-50">
      <div className="">
        <ul className="flex space-x-7 text-4xl font-bold mt-1 ">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/biography">Biography</Link>
          </li>

          <li>
            <Link to="/wedding">Wedding</Link>
          </li>

          <li>
            <Link to="/event">Events</Link>
          </li>

          <li>
            <Link to="/foot">Foot</Link>
          </li>

          <li>
            <Link to="/corporative">corporative</Link>
          </li>

          <li>
            <Link to="/fashion">Fashion</Link>
          </li>

          <li>
            <Link to="/quotation">quotation/contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
