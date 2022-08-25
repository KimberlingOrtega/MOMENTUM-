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
      <Description />

     <FotoGallery/>
      <Modal />
    </div>
  );
};
