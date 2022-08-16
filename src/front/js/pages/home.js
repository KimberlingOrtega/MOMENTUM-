import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="h-screen pt-32">
        <section className="h-full bg-purple-300 fondo">
          <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
            <div className="max-w-2xl text-center">
              <h1 className=" principal-title text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-5xl">
                SANDRA SÁNCHEZ
              </h1>

              <p className="mt-6 lg:text-lg text-white">
                You can subscribe to our newsletter, and let you know when we
                are back
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="Gallery h-full w-full flex-wrap flex bg-white-400 ">
        <div className="Description-photo w-1/2 h-80 bg-white-300 py-8">
          <p className="title-1">Commercial Photography</p>

          <hr className="line"></hr>
          <p className="title-2">
            La fotografia corporate come valorizzazione dell’azienda, delle
            persone, della filosofia, dei prodotti, dei processi produttivi
          </p>
          <button class=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </div>
        <div className="img-photo 1 w-1/2 bg-green-300 h-80 flex items-center justify-center">
          <p className="title-photo">CORPORATE</p>
        </div>

        <div className="img-photo dos w-1/2 bg-green-300 h-80 flex items-center justify-center">
          <p className="title-photo">FHASION</p>
        </div>
        <div className="Description-photo photo-2  w-1/2 h-80 bg-white-300 py-8">
          <p className="title-1">Commercial Photography</p>

          <hr className="line"></hr>
          <p className="title-2">
            La fotografia corporate come valorizzazione dell’azienda, delle
            persone, della filosofia, dei prodotti, dei processi produttivi
          </p>
          <button class=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </div>

        <div className="Description-photo w-1/2 h-80 bg-white-300 py-8">
          <p className="title-1">FOOD PHOTOGRAPHY</p>

          <hr className="line"></hr>
          <p className="title-2">
            Food, beverage, still life… immagini commerciali per ristoranti,
            aziende alimentari, produttori, blog, editoria del settore
            alimentare.
          </p>
          <button class=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </div>
        <div className="img-photo tres w-1/2 bg-green-300 h-80 flex items-center justify-center">
          <p className="title-photo">FOOD</p>
        </div>

        <div className="img-photo cuatro w-1/2 bg-green-300 h-80 flex items-center justify-center">
          <p className="title-photo">CORPORATE</p>
        </div>

        <div className="Description-photo photo-2 w-1/2 h-80 bg-white-300 py-8">
          <p className="title-1">Commercial Photography</p>

          <hr className="line"></hr>
          <p className="title-2">
            La fotografia corporate come valorizzazione dell’azienda, delle
            persone, della filosofia, dei prodotti, dei processi produttivi
          </p>
          <button class=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </div>

        <div className="Description-photo w-1/2 h-80 bg-white-300 py-8">
          <p className="title-1">FOTOGRAFO MATRIMONI</p>

          <hr className="line"></hr>
          <p className="title-2">
            Il giorno delle nozze è fatto per essere vissuto, al fotografo di
            matrimoni spetta il compito di raccontare una storia d’amore.
          </p>
          <button class=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
        </div>
        <div className="img-photo cinco w-1/2 bg-green-300 h-80 flex items-center justify-center">
          <p className="title-photo">WEDDING</p>
        </div>
      </div>
    </>
  );
};
