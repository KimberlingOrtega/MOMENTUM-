import React from "react";
import { Title } from "../component/title";
import { FotoContacto } from "../component/fotoContacto";
import { TextoFoto } from "../component/textoFoto";
import { FotoTexto } from "../component/fotoTexto";
import { Modal } from "../component/modal";

export const Biografia = () => {
  return (
    <div className="pt-32">
      <Title titulo="Biografía" />
      <FotoContacto />
      <TextoFoto
        image="https://coisadefotografa.com/wp-content/uploads/2021/05/ebooks-para-fotografos-2-min-scaled.jpg"
        title="¡Oye! Soy Sandra Sanchez "
        text="Soy de Río de Janeiro y… hablar de nosotros mismos nunca es una tarea fácil, ¿verdad? ¡Me gusta hablar de cosas de fotografía y de por qué existe hoy en día!

Cuando comencé a ingresar al mercado de la fotografía me di cuenta de que es extremadamente confuso, difícil y aburrido aprender tanto de un día para otro y desentrañar todos los secretos por mí mismo. Y sabiendo que es tan complicado manejar todo solo es que hoy quiero transmitirte mis conocimientos y mis experiencias."
      />
      <FotoTexto
        image="https://coisadefotografa.com/wp-content/uploads/2017/09/como-atrair-os-primeiros-clientes-na-fotografia-2-scaled.jpg"
        text="Aquí no creemos en “la confianza y la esperanza de caer del cielo”. Creemos en hacer las cosas de manera diferente, trabajando duro, dejando de lado las excusas y poniéndolas en práctica.

Mi misión aquí es ayudarte a guardar e inmortalizar todos esos momentos especiales que vives con tu familia, amigos y conocidos.

"
        finaltext="Gracias por estar aquí!"
      />
    <Modal />  
    </div>
  );
};
