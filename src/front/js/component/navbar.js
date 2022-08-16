import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo-fotografo.png";
// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container">
// 				<Link to="/">
// 					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 				</Link>
// 				<div className="ml-auto">
// 					<Link to="/demo">
// 						<button className="btn btn-primary">Check the Context in action</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>

// 	);

// };

// export const Navbar = () => {
//   return (
//     <div className="fixed top-0 left-0 rigth-0 text-3xl bg-blue-500 w-100 text-center">
//       MOMENTUM
//     </div>
//   );
// };

export const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 flex justify-center bg-white opacity-80 ">
      <div className="">
        <img className="object-cover w-40 h-20" src={Logo} />
      </div>
    </div>
  );
};
