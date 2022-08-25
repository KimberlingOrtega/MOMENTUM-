import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Modal } from "../component/modal";
import { InicioFT } from "../component/inicioFT";
import { InicioTF } from "../component/inicioTF";

export const Inicio = () => {
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
      <InicioTF image="https://www.matteozanga.it/wp-content/uploads/2020/04/fotografo-matrimoni.jpg.webp" title="Fotografía de bodas" titleimg="Boda" text="El día de la boda es para vivirlo, el fotógrafo de bodas tiene la tarea de contar una historia de amor." buttonname="Boda" />
      <InicioFT image="https://img.freepik.com/foto-gratis/amigos-felices-cantando-karaoke-juntos_1098-1623.jpg?w=1480&t=st=1661440195~exp=1661440795~hmac=990e33ed850b290e09b37e2760452d28c39f7640b1129e796e082436c25589d7" title="Fotografía de eventos" titleimg="Evento" text="Siempre habrá eventos especiales que deben ser capturados por un fotógrafo profesional. Y eso va desde fiestas de cumpleaños infantiles hasta conciertos o eventos nocturnos." buttonname="Eventos"  />
      <InicioTF image="https://www.matteozanga.it/wp-content/uploads/2020/04/fotografo-food.jpg.webp" title="Fotografía de comida" titleimg="Comida" text="Alimentación, bebidas, bodegones… imágenes comerciales para restaurantes, empresas de alimentación, productoras, blogs, editorial del sector alimentario." buttonname="Comida"/>
      <InicioFT image="https://img.freepik.com/foto-gratis/retrato-joven-trabajador-casco-gran-planta-metalurgica_146671-19548.jpg?w=1480&t=st=1661441259~exp=1661441859~hmac=5f9977a52b8ecf6391e844549544f87d701b18e1017addad7d11c177144f9e93" title="Fotografía comercial" titleimg="Corporativo" text="La fotografía corporativa como puesta en valor de la empresa, las personas, la filosofía, los productos, los procesos productivos." buttonname="Corporativo" />
      <InicioTF image="https://www.matteozanga.it/wp-content/uploads/2020/04/fotografo-moda.jpg.webp" title="Fotografía Moda" titleimg="Moda" text="Sesiones de fotos de moda para catálogos, libros, colecciones y publicidad para tiendas, casas de moda, estilistas, artesanos." buttonname="Moda"/>
      <Modal />
    </>
  );
};

      // <div className="Gallery h-full w-full flex-wrap flex bg-white-400 ">
      //   <div className="Description-photo w-1/2 h-80 bg-white-300 py-8">
      //     <p className="title-1">Commercial Photography</p>

      //     <hr className="line"></hr>
      //     <p className="title-2">
      //       La fotografia corporate come valorizzazione dell’azienda, delle
      //       persone, della filosofia, dei prodotti, dei processi produttivi
      //     </p>
      //     <Link to="/corporativo"><button className=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      //       Corporativo
      //     </button></Link>
      //   </div>
      //   <div className="img-photo 1 w-1/2 bg-green-300 h-80 flex items-center justify-center">
      //     <p className="title-photo">CORPORATE</p>
      //   </div>

      //   <div className="img-photo dos w-1/2 bg-green-300 h-80 flex items-center justify-center">
      //     <p className="title-photo">FHASION</p>
      //   </div>
      //   <div className="Description-photo photo-2  w-1/2 h-80 bg-white-300 py-8">
      //     <p className="title-1">Commercial Photography</p>

      //     <hr className="line"></hr>
      //     <p className="title-2">
      //       La fotografia corporate come valorizzazione dell’azienda, delle
      //       persone, della filosofia, dei prodotti, dei processi produttivi
      //     </p>
      //     <Link to="/moda"><button className=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      //       Moda
      //     </button></Link>
      //   </div>

      //   <div className="Description-photo w-1/2 h-80 bg-white-300 py-8">
      //     <p className="title-1">FOOD PHOTOGRAPHY</p>

      //     <hr className="line"></hr>
      //     <p className="title-2">
      //       Food, beverage, still life… immagini commerciali per ristoranti,
      //       aziende alimentari, produttori, blog, editoria del settore
      //       alimentare.
      //     </p>
      //     <Link to="/comida"><button className=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      //       Comida
      //     </button></Link>
      //   </div>
      //   <div className="img-photo tres w-1/2 bg-green-300 h-80 flex items-center justify-center">
      //     <p className="title-photo">FOOD</p>
      //   </div>

      //   <div className="img-photo cuatro w-1/2 bg-green-300 h-80 flex items-center justify-center">
      //     <p className="title-photo">CORPORATE</p>
      //   </div>

      //   <div className="Description-photo photo-2 w-1/2 h-80 bg-white-300 py-8">
      //     <p className="title-1">Commercial Photography</p>

      //     <hr className="line"></hr>
      //     <p className="title-2">
      //       La fotografia corporate come valorizzazione dell’azienda, delle
      //       persone, della filosofia, dei prodotti, dei processi produttivi
      //     </p>
      //     <button className=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      //       Button
      //     </button>
      //   </div>

      //   <div className="Description-photo w-1/2 h-80 bg-white-300 py-8">
      //     <p className="title-1">FOTOGRAFO MATRIMONI</p>

      //     <hr className="line"></hr>
      //     <p className="title-2">
      //       Il giorno delle nozze è fatto per essere vissuto, al fotografo di
      //       matrimoni spetta il compito di raccontare una storia d’amore.
      //     </p>
      //     <button className=" button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      //       Button
      //     </button>
      //   </div>
      //   <div className="img-photo cinco w-1/2 bg-green-300 h-80 flex items-center justify-center">
      //     <p className="title-photo">WEDDING</p>
      //   </div>
      // </div>