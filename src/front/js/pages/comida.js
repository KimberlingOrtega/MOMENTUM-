import React from "react";
import { Title } from "../component/title";
import { Description } from "../component/description";
import { Foto } from "../component/foto";
import { Modal } from "../component/modal";
import { FotoGallery } from "../component/fotoGallery";
export const Comida = () => {
  return (
    <div className="px-0 pt-32 mx-auto ">
      <Title titulo="Comida" />
      <Description
        title="Alimentos, Bebidas, Bodegones... lo bueno para fotografiar."
        text="imágenes comerciales para restaurantes, menús, catálogos, recetarios, empresas de alimentación, productores, granjas, blogs y publicaciones del sector alimento."
      />

      <div className="row ">
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Bresaola-MOTTOLINI-2013-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/FORMAGGIO-TIPICO-BRANZI-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZA-LEGGERA-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-Calusco-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/VANIGLIA-QUINOA-768x512.jpg.webp"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/FORMAGGIO-BRANZI-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/OSTERIA-DEL-BORGO-Bergamo-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA_Bergamo-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-Calusco-Adda-768x512.jpg.webp"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/FORMAGGIO-BRANZI-OROBIE-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/OSTERIA-DEL-BORGO-Oneta-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA_Calusco-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-menu-768x512.jpg.webp"
          />
        </div>

        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Formaggio-delle-Orobie-BRANZI-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-Bergamo-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/VANIGLIA-e-QUINOA-768x512.jpg.webp"
          />
        </div>
      </div>
      <Modal />
    </div>
  );
};
