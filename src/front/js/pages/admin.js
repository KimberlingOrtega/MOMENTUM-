import React, { useContext, useEffect, useState } from "react";
import { Title } from "../component/title";
import { Context } from "../store/appContext";
import { sweetNotification } from "../utils/sweetnotification";

export const Admin = () => {
  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [workDate, setWorkDate] = useState("");
  const [service, setService] = useState("");
  const [link, setLink] = useState("");

  const handleWorkRegistration = async () => {
    let data = {
      full_name: fullName,
      date: workDate,
      service_name: service,
      work_link: link,
    };
    if (await actions.registerNewWork(data)) {
      return console.log("Trabajo agregado");
    }
    return console.log("Trabajo NO agregado");
  };
  useEffect(() => {
    actions.getAllWorks();
  }, []);
  return (
    <div className="px-0 pt-32 ">
      {/* <Title titulo="Registro de clientes" /> */}
      <div className="flex ">
        <div className="w-1/4 h-screen">
          <img
            className="h-screen object-cover"
            src="https://img.freepik.com/foto-gratis/tiro-largo-bonita-mujer-posando-studio_23-2148532564.jpg?w=740&t=st=1662067213~exp=1662067813~hmac=47b6e344434539d329554ffcda5c8485116f209bff20fd7317bb6f0bfb77caf3"
          />
        </div>
        <div className="w-3/4 mt-8">
          <div className="">
            <div className="flex justify-center principal-title text-black font-bold">
              Trabajos realizados
            </div>
            <div className="flex items-center justify-center mt-10">
              <div className="">
                <input
                  className="rounded-md"
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  value={fullName}
                  required
                  placeholder="Full Name"
                ></input>
              </div>

              <div>
                <input
                  className="ml-3 rounded-md"
                  type="text"
                  name="name"
                  onChange={(e) => {
                    let date = e.target.value;
                    const [year, month, day] = date.split("-");
                    const convertedDate = `${day}/${month}/${year}`;
                    setWorkDate(convertedDate);
                  }}
                  required
                  placeholder="Fecha"
                ></input>
              </div>

              <div>
                <input
                  className="ml-3 rounded-md"
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setService(e.target.value);
                  }}
                  value={service}
                  required
                  placeholder="Servicio"
                ></input>
              </div>

              <div>
                <input
                  className="ml-3 rounded-md"
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  value={link}
                  required
                  placeholder="Link"
                ></input>
              </div>

              <div className="ml-3 flex items-center">
                <button
                  type="button"
                  className="rounded-md inline-flex items-center px-3 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                  Guardar
                </button>
              </div>
            </div>
            {/* LISTAR EN UN DIV AQUI LOS CLIENTES YA REGISTRADOS */}
            {store.allWorks &&
              store.allWorks.map((work, index) => {
                return (
                  <div key={index}>
                    <p>Nombre: {work.full_name}</p>
                    <p>Fecha: {work.date}</p>
                    <p>Servicio: {work.service_name}</p>
                    <p>Link: {work.work_link}</p>
                  </div>
                );
              })}
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
