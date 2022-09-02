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
      <Description title="Alimentos, Bebidas, Bodegones... lo bueno para ser fotografiado." text="La comida es una de las grandes alegrías de la vida, y me encanta ayudar a los restauradores y productores a mostrar y realzar sus obras de arte.
Si quieres comer con los ojos estos deliciosos platos, ¡entonces habré tenido éxito en mi intento!"/>

      <div className="row ">
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Bresaola-MOTTOLINI-2013.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Formaggio-delle-Orobie-BRANZI.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/OSTERIA-DEL-BORGO-Oneta.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA_Bergamo.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-Calusco.jpg"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/FORMAGGIO-BRANZI.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/FORMAGGIO-TIPICO-BRANZI.jpg"
          />
            <Foto
              className="icon"
              url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA.jpg"
            />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/FORMAGGIO-BRANZI-OROBIE.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-Calusco-Adda.jpg"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/VANIGLIA-e-QUINOA.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-menu.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/VANIGLIA-QUINOA.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PIZZALEGGERA-Bergamo.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/OSTERIA-DEL-BORGO-Bergamo.jpg"
          />
        </div>

        <div className="column ">
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/closeup-foto-deliciosa-pasta-plato-blanco_181624-42152.jpg?w=1480&t=st=1661896756~exp=1661897356~hmac=f7d94fdec70be36d31198292b6ef77012cda404b35382920dcf3691c43a2bc6e"
          />
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/placa-albahaca-cereza-menu-gourmet_1220-1184.jpg?w=1480&t=st=1661896779~exp=1661897379~hmac=e3f402087a4e4f182d13a5c259db020783c8fd2ad3b0ff9d41c2477e735c79c1"
          />
          <Foto
            className="icon"
            url="https://img.freepik.com/fotos-premium/pizza-mesa-madera-vista-superior-publicacion-comida-rapida-blog-redes-sociales-espacio-copia-pizza-lista-comer_211786-2680.jpg?w=1480"
          />
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/tacos-mexicanos-carne-res-salsa-tomate-salsa_2829-14218.jpg?w=1480&t=st=1661896834~exp=1661897434~hmac=91f45750b5943a30c6d1434455759d5fdd282a101d6874d9c40c711a2c1d9a21"
          />
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/paella-espanola-mariscos-mejillones-camarones-etc-paellera-acero-canarias-cocina-pequeno-restaurante-familiar_1217-1763.jpg?w=1480&t=st=1661896907~exp=1661897507~hmac=cf1ef543a5812c9732af349dfaf6cda749001e32f05f287a30241ab5ea08e628"
          />
        </div>
      </div>
      <Modal />
    </div>
  );
};
