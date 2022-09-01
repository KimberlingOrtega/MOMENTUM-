import React from "react";
import { Title } from "../component/title";

export const Clientes = () => {
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
            <div>
            <div className="flex justify-center principal-title text-black font-bold">Registrar cliente</div>
              <div className="flex flex-col items-center sm:justify-center sm:pt-0 mt-6">
                <div className="border border-4 border-gray-900 w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                  <form>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined font-bold"
                      >
                        Full name
                      </label>
                      <div className="flex flex-col items-start">
                        <input
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
                        Phone number
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="number"
                          name="phone"
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
                          type="email"
                          name="email"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
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
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-gray-700 undefined font-bold"
                      >
                        Confirm Password
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
                        type="submit"
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                      >
                        Register
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
