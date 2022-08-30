import React from "react";
import { Title } from "../component/title";
import { Description } from "../component/description";
import { Foto } from "../component/foto";
import { Modal } from "../component/modal";
export const Corporativo = () => {
  return (
    <div className="px-0 pt-32 mx-auto ">
      <Title titulo="Corporativo" />
      <Description title="Fotografía de comida" text="Me gusta ayudar a los emprendedores a potenciar sus empresas y sus productos .
Contar con fotografías de alta calidad significa comunicarse profesionalmente en un entorno cada día más competitivo.
Trabajadores, maquinaria, etapas de producción, productos terminados:
¡Muéstrale al mundo de lo que eres capaz!"/>

      <div className="row ">
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografia-Industriale-Verona.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PHONETICA-MILANO.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/STOCKLI-APPAREL_SLOVAKIA.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/TECNOCOPERTURE.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/DENTAL3-Centro-Odontoiatrico.jpg"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografia-Industriale-Bergamo.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografia-Studi-Dentistici.jpg"
          />
            <Foto
              className="icon"
              url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografia-Industriale-Milano.jpg"
            />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/STOCKLI-APPAREL-SLOVAKIA.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/DENTAL3.jpg"
          />
        </div>
        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/TECNOCOPERTURE-Bergamo.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/PHONETICA.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/STOCKLI-APPAREL.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/STOCKLI-SLOVAKIA.jpg"
          />
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografia-Industriale.jpg"
          />
        </div>

        <div className="column ">
          <Foto
            className="icon"
            url="https://www.matteozanga.it/wp-content/uploads/2020/05/Fotografia-Industriale-Como.jpg"
          />
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/cooperacion-ingenieros-tecnico-masculino-femenino-control-mantenimiento-rele-sistema-brazo-robotico-soldadura-tableta-portatil-controlar-calidad-operacion-proceso-trabajo-industria-pesada-40-fabrica-fabricacion_609648-792.jpg?w=1480&t=st=1661899355~exp=1661899955~hmac=3478bb87998217f1e0348542ea6c770df14f24785a895e9a2824a7a7dcb07fa4"
          />
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/hombre-casco-blanco-cerca-panel-solar_1157-29994.jpg?w=740&t=st=1661899424~exp=1661900024~hmac=c17720b955623f3696aa50cb0b753924d19bc8fe61f0c674a60ed41dabb017c7"
          />
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/hombre-trabajando-soplete_181624-47275.jpg?w=1480&t=st=1661899476~exp=1661900076~hmac=795d8d3a4ccedc2c0534704fc184d26874f81b494a529a6ed75b3cca27d12a92"
          />
          <Foto
            className="icon"
            url="https://img.freepik.com/foto-gratis/trabajador-fabrica-casco-uniforme-mostrando-nuevos-productos-metalicos-al-supervisor-gerente_342744-116.jpg?w=1480&t=st=1661899494~exp=1661900094~hmac=3ada49118c268abef4e3f222b922b980e4868f28444ba53674174db5f2b60fdc"
          />
        </div>
      </div>
      <Modal />
    </div>
  );
};