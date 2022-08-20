import React from "react";
import { Title } from "../component/title";
import { Description } from "../component/description";
import { Foto } from "../component/foto";
import { Modal } from "../component/modal";
export const Comida = () => {
  return (
    <div className="px-0 pt-32 mx-auto ">
      <Title titulo="Comida" />
      <Description />

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 gap-2 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg p-0 mx-6">
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/AMAZING.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/AMAZING-MODA.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/MORGANA_GIOIELLI.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
        <Foto url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg" />
      </div>
      <Modal />
    </div>
  );
};