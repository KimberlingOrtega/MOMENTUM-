import React from "react";
import { Title } from "../component/Title";
import { Description } from "../component/Description";
import { Foto } from "../component/Foto";
import { Modal } from "../component/Modal";
export const Moda = () => {
  return (
    <div className="px-0 pt-32 mx-auto ">
      <Title titulo="Moda" />
      <Description />

      <div className="grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg ">
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/AMAZING.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/AMAZING-MODA.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/04/fotografo-moda.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/MORGANA_GIOIELLI.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
      </div>
      <Modal />
    </div>
  );
};
