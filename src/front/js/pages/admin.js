import React from "react";
import { Title } from "../component/title";

export const Admin = () => {
  return (
    <div className="px-0 pt-32 ">
      {/* <Title titulo="Registro de clientes" /> */}
      <div className="flex ">
        <div className="w-1/4 h-screen">
          <img
            className="h-screen object-cover"
            src="https://img.freepik.com/foto-gratis/tiro-vertical-escala-grises-lente-camara-sobre-superficie-madera_181624-514.jpg?w=826&t=st=1661902397~exp=1661902997~hmac=4e2473f9adc1ead018298037fc1c81b92b95b7b1c7eaa1fba42a3b9b9f3febe2"
          />
        </div>
        <div className="w-3/4 mt-8">
          <div className="">
            <div className="flex justify-center principal-title text-black">Clientes</div>
            <div className="flex items-center justify-center mt-8">
              <div className="">
                <input
                  className=""
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                ></input>
              </div>

              <div>
                <input
                  className="ml-3"
                  type="text"
                  name="name"
                  required
                  placeholder="Fecha"
                ></input>
              </div>

              <div>
                <input
                  className="ml-3"
                  type="text"
                  name="name"
                  required
                  placeholder="Servicio"
                ></input>
              </div>

              <div>
                <input
                  className="ml-3"
                  type="text"
                  name="name"
                  required
                  placeholder="Link"
                ></input>
              </div>

              <div className="ml-3 ">
                <button className="p-2 bg-sky-500 hover:bg-sky-700 ...">
                  Salvar
                </button>
              </div>
            </div>
            {/* LISTAR EN UN DIV AQUI LOS CLIENTES YA REGISTRADOS */}
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="pt-32">
//   <Title titulo="Mis trabajos" />
//   <div className="h-screen">
//     <div className=" flex justify-center">
//       <div className="mt-5 grid grid-cols-1 gap-2 ">
//         <div className="1 flex items-center">
//           <div className="">
//             <input
//               className=""
//               type="text"
//               name="name"
//               required
//               placeholder="Full Name"
//             ></input>
//           </div>

//           <div>
//             <input
//               className="ml-3"
//               type="text"
//               name="name"
//               required
//               placeholder="Fecha"
//             ></input>
//           </div>

//           <div>
//             <input
//               className="ml-3"
//               type="text"
//               name="name"
//               required
//               placeholder="Servicio"
//             ></input>
//           </div>

//           <div>
//             <input
//               className="ml-3"
//               type="text"
//               name="name"
//               required
//               placeholder="Link"
//             ></input>
//           </div>

//           <div className="ml-3 ">
//             <button className="p-2 bg-sky-500 hover:bg-sky-700 ...">
//               Salvar
//             </button>
//           </div>
//         </div>
//         <div className="1 flex gap-4">
//           <div className="w-48">nombre</div>

//           <div className="w-48 ml-5">fecha</div>

//           <div className="w-48">servicio</div>
//           <div className="w-48">link</div>
//           <div>boton</div>
//         </div>
//         <div className="1 flex gap-4">
//           <div>nombre</div>
//           <div>fecha</div>
//           <div>servicio</div>
//           link
//           <div>boton</div>
//         </div>
//         <div className="1 flex gap-4">
//           <div>nombre</div>

//           <div>fecha</div>

//           <div>servicio</div>

//           <div>link</div>

//           <div>boton</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
