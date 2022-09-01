import React, { useContext, useEffect, useState } from "react";
import { Title } from "../component/title";
import { Context } from "../store/appContext";

export const Datos = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const getUserData = async () => {
    if (await actions.getUserData()) {
      setEmail(store.userData.email);
      setPhoneNumber(store.userData.phone_number);
      setFullName(store.userData.full_name);
    }
  };

  const handleUpdateData = async () => {
    let data = {
      full_name: fullName,
      email: email,
      phone_number: phoneNumber,
    };
    if (await actions.updateUserData(data)) {
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="px-0 pt-32 ">
      {/* <Title titulo="Datos" /> */}
      <div className="flex ">
        <div className="w-1/4 h-screen">
          <img
            className="h-screen object-cover"
            src="https://img.freepik.com/foto-gratis/redactar-correo-electronico-dispositivo-digital_53876-132282.jpg?w=740&t=st=1661905822~exp=1661906422~hmac=d65cb5c5ab266e9d81d3df39862afe4cb10882aa5cbdb81e7c40bded0c0b829b"
          />
        </div>
        <div className="w-3/4 mt-8">
          <div className=" ">
          <div className="flex justify-center principal-title text-black font-bold">Datos</div>
            <div>
              <div className="flex flex-col items-center sm:justify-center sm:pt-0 ">
                <div className="border border-4 border-gray-900 w-full px-6 py-4 mt-8 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                  <form>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined font-bold"
                      >
                        Nombre completo
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          onChange={(e) => {
                            setFullName(e.target.value);
                          }}
                          value={fullName}
                          type="text"
                          name="name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 undefined font-bold"
                      >
                        Teléfono
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                          value={phoneNumber}
                          type="text"
                          name="phone"
                          id="phone"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined font-bold"
                      >
                        Email
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          type="email"
                          name="email"
                          value={email}
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <button
                        type="button"
                        onClick={handleUpdateData}
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                      >
                        Guardar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-16">
            <div className="flex flex-col items-center sm:justify-center sm:pt-0 ">
            <div className="flex justify-center principal-title text-black font-bold">Alterar contraseña</div>
              <div className="border border-4 border-gray-900 w-full px-6 py-4 mt-8 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form>
                  <div className="">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 undefined font-bold"
                    >
                      Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 undefined font-bold"
                    >
                      New Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password_confirmation"
                      className="block text-sm font-medium text-gray-700 undefined font-bold"
                    >
                      Confirm New Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password_confirmation"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-4">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="mt-5 border-solid border-2 px-10 py-2">
  <p className="text-lg">Nombre completo : </p>{" "}
  <input
    className="mr-0"
    type="text"
    name="name"
    required
    size="25"
  ></input>
  <p className="text-lg">Correo: </p>{" "}
  <input
    className="mr-0"
    type="text"
    name="name"
    required
    size="25"
  ></input>
  <p className="text-lg">Número telefónico: </p>{" "}
  <input
    className="mr-0"
    type="text"
    name="name"
    required
    size="25"
  ></input>
  <br></br>
  <button className="mt-2 bg-sky-500 hover:bg-sky-700 ...">
    Save changes
  </button>
</div>
<div className="mt-5 border-solid border-2 px-10 py-2">
  <p className="text-lg">Contraseña actual: </p>{" "}
  <input
    className="mr-0"
    type="text"
    name="name"
    required
    size="25"
  ></input>
  <p className="text-lg">Nueva contraseña: </p>{" "}
  <input
    className="mr-0"
    type="text"
    name="name"
    required
    size="25"
  ></input>
  <p className="text-lg">Repetir nueva contraseña: </p>{" "}
  <input
    className="mr-0"
    type="text"
    name="name"
    required
    size="25"
  ></input>
  <br></br>
  <button className="mt-2 bg-sky-500 hover:bg-sky-700 ...">
    Save changes
  </button>
</div> */
}
