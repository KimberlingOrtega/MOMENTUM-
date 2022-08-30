import React from "react";
import { Title } from "../component/title";
import { Description } from "../component/description";
import { Foto } from "../component/foto";
import { Modal } from "../component/modal";
export const Boda = () => {
  return (
    <div className="px-0 pt-32 mx-auto ">
      <Title titulo="Boda" />
      <Description
        title="
        La emoción de tu día más hermoso, un recuerdo que hay que detener."
        text="
        El día de la boda está hecho para ser vivido, el fotógrafo de bodas tiene la tarea de contar una historia de amor, deteniendo esos momentos inolvidables, emociones y estados de ánimo, pequeños detalles, sonrisas, lágrimas, expresiones, personas y destellos del día de una boda."
      />

      <div className="row ">
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/foto-matrimonio.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotografo-sposi-matrimoni.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografo-Matrimoni-Bergamo.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotoreporter-sposi-Bergamo.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/foto-matrimoni.jpg.webp"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotografi-matrimoni.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotografi-sposi.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotografo-matrimoni-iseo.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/foto-sposi-Bergamo.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografo-Matrimonio-Bergamo.jpg.webp"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotografo-sposi.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/foto-matrimoni-bergamo.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotografo-wedding.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/foto-wedding.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotoreporter-matrimoni.jpg.webp"
          />
        </div>

        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografo-Matrimonio.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/fotografi-wedding.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/foto-matrimonio-Bergamo.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/reportage-sposi.jpg.webp"
          />
        </div>
      </div>
      <Modal />
    </div>
  );
};
