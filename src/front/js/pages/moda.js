import React from "react";
import { Title } from "../component/title";
import { Description } from "../component/description";
import { Foto } from "../component/foto";
import { Modal } from "../component/modal";
export const Moda = () => {
  return (
    <div className="px-0 pt-32 mx-auto ">
      <Title titulo="Moda" />
      <Description
        title="
        Los necios inventan modas y los sabios las siguen."
        text="
        Sesiones de fotos de moda para catálogos, libros, colecciones y publicidad para tiendas, casas de moda, estilistas."
      />

      <div className="row ">
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/AMAZING.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/MORGANA-6-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/SEASE-abbigliamento.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/SIMAR-ITALIAN-STYLE.jpg.webp"
          />
          {/* <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/WARSAW-FASHION_4.jpg.webp"
          /> */}
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/imagen-moda-estilo-callejero-increible-moda-joven-mujer-bonita-posando-calle_291049-2.jpg?w=1480&t=st=1661900597~exp=1661901197~hmac=2ed1691fa482bb5758be5435f66f4744ea94b7568959a7be4905b45c758a31ca"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/MORGANA-GIOIELLI-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/SIMAR-MODA.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/SEASE-CLOTHING-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/WARSAW-FASHION_5.jpg.webp"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/GOLDEN.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/MORGANA-GIOIELLI_1.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/SIMAR.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/WARSAW-FASHION-768x456.jpg.webp"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/04/fotografo-moda-768x512.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/MORGANA-GIOIELLI_2.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/MORGANA-GIOIELLI_3.jpg.webp"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/SIMAR-fashion.jpg.webp"
          />
          {/* <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/WARSAW-FASHION_3.jpg.webp"
          /> */}
        </div>
      </div>
      <Modal />
    </div>
  );
};
