import React from "react";

export const Formulario = () => {
  return (
    <div className="formulario">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalLong"
      >
        Launch demo modal long
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalLong"
        tabindex="-1"
        aria-labelledby="exampleModalLongLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLongLabel"
              >
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4" style="min-height: 1500px">
              This is some placeholder content to show the scrolling behavior
              for modals. Instead of repeating the text the modal, we use an
              inline style set a minimum height, thereby extending the length of
              the overall modal and demonstrating the overflow scrolling. When
              content becomes longer than the height of the viewport, scrolling
              will move the modal as needed.
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <form classname="w-full max-w-lg">
<div classname="flex flex-wrap -mx-3 mb-6">
<div classname="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label
    classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-first-name"
  >
    First Name
  </label>
  <input
    classname="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    id="grid-first-name"
    type="text"
    placeholder="Jane"
  />
  <p classname="text-red-500 text-xs italic">
    Please fill out this field.
  </p>
</div>
<div classname="w-full md:w-1/2 px-3">
  <label
    classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-last-name"
  >
    Last Name
  </label>
  <input
    classname="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-last-name"
    type="text"
    placeholder="Doe"
  />
</div>
</div>
<div classname="flex flex-wrap -mx-3 mb-6">
<div classname="w-full px-3">
  <label
    classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-password"
  >
    Password
  </label>
  <input
    classname="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-password"
    type="password"
    placeholder="******************"
  />
  <p classname="text-gray-600 text-xs italic">
    Make it as long and as crazy as you'd like
  </p>
</div>
</div>
<div classname="flex flex-wrap -mx-3 mb-2">
<div classname="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  <label
    classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-city"
  >
    City
  </label>
  <input
    classname="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-city"
    type="text"
    placeholder="Albuquerque"
  />
</div>
<div classname="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  <label
    classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-state"
  >
    State
  </label>
  <div classname="relative">
    <select
      classname="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-state"
    >
      <option>New Mexico</option>
      <option>Missouri</option>
      <option>Texas</option>
    </select>
    <div classname="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        classname="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</div>
<div classname="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  <label
    classname="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-zip"
  >
    Zip
  </label>
  <input
    classname="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-zip"
    type="text"
    placeholder="90210"
  />
</div>
</div>
</form> */
}
