import React from "react";

export const Contacto = () => {
  return (
    <div className=" h-5/6 mt-3">
      <p className="Personal-title pt-2 text-title text-5xl flex justify-center items-center  w-96 mx-auto  mb-1 text-slate-500 font-bold ">
        Sándra Sanchez
      </p>
      <p className="text-slate-500 font-bold  text-3xl flex justify-center items-center mb-2  ">
        Inmortaliza tus recuerdos
      </p>
      <div className="Contact h-1/4 my-5 pt-4">
        <p className="text-slate-500 font-bold text-2xl mt-3 ml-6 pl-6">
          <i class="fa-solid fa-phone"></i> +39 347 148 9771
        </p>
        <p className="text-slate-500 font-bold text-2xl my-2 ml-6 pl-6">
          <a href="https://ve.linkedin.com/" target="_blank">
            <i class="fa-solid fa-envelope"></i> info@matteozanga.it
          </a>
        </p>
      </div>
      <div className="social-network w-80  mt-5">
        <ul>
          <li>
            <a
              href="https://ve.linkedin.com/"
              target="_blank"
              className="linkedin"
            >
              <i className=" fab fa-linkedin-in "></i>
            </a>
          </li>
          <li>
            <a
              href="https://es-la.facebook.com/"
              target="_blank"
              className="facebook"
            >
              <i className=" fab fa-facebook-f "></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/?lang=es"
              target="_blank"
              className="twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="youtube"
            >
              <i className="fab fa-youtube "></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
