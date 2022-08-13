import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="h-3/4 fondo">
        <section className="h-full bg-purple-300">
          <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
            <div className="max-w-2xl text-center">
              <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-5xl">
                SANDRA SÁNCHEZ
              </h1>

              <p className="mt-6 lg:text-lg text-white">
                You can subscribe to our newsletter, and let you know when we
                are back
              </p>

              <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                <input
                  id="email"
                  type="text"
                  className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2"
                  placeholder="Email Address"
                />

                <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="Gallery h-full w-full flex-wrap flex bg-white-400">
        <div className="Description-photo w-1/2 h-2/4 bg-white-300 py-8">
          <p className="title-1">Commercial Photography</p>

          <hr className="line"></hr>
          <p className="title-2">
            Corporate photography as an enhancement of the company, people,
            philosophy, products, and production processes.
          </p>
        </div>
        <div className="img-photo w-1/2 bg-green-300 h-2/4 py-8">
          <h3>Descripcion de boda</h3>
        </div>

        <div className="img-photo w-1/2 bg-green-300 h-2/4 py-8">
          <h3>Corporativo</h3>
        </div>
        <div className="Description-photo w-1/2 h-2/4 bg-white-300 py-8">
          <h3 className="title">Descripcion de corporativo</h3>
        </div>

        <div className="Description-photo w-1/2 h-2/4 bg-white-300 py-8">
          <h3 className="title">evento nocturno</h3>
        </div>
        <div className="img-photo w-1/2 bg-green-300 h-2/4 py-8">
          <h3>Descripcion de evento nocturno</h3>
        </div>

        <div className="img-photo w-1/2 bg-green-300 h-2/4 py-8">
          <h3>comida</h3>
        </div>

        <div className="Description-photo w-1/2 h-2/4 bg-white-300 py-8">
          <h3 className="title">Descripcion</h3>
        </div>

        <div className="Description-photo w-1/2 h-2/4 bg-white-300 py-8">
          <h3 className="title">Descripcion moda</h3>
        </div>
        <div className="img-photo w-1/2 bg-green-300 h-2/4 py-8">
          <h3>moda</h3>
        </div>
      </div>
    </>
  );
};
