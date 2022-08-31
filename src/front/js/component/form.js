import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export const Form = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API,
    libraries: ["places"],
  });
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [servise, setServise] = useState("");
  const [description, setDescription] = useState("");

  const [selected, setSelected] = useState(null);
  const [center, setCenter] = useState({ lat: 10.5, lng: -66.917 });
  const [zoom, setZoom] = useState(10);

  useEffect(() => {}, [center]);

  return (
    <form className="w-full ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Nombre completo"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={fullName}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <div>
            {isLoaded == false ? (
              "Loading..."
            ) : (
              <PlacesAutocomplete
                setSelected={setSelected}
                setCenter={setCenter}
                setZoom={setZoom}
                setLocation={setLocation}
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Telefono"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3 mb-4 md:mb-0">
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htlmfor="grid-state"
            >
              Selecciona un servicio.
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => {
                setServise(e.target.options[e.target.selectedIndex].text);
              }}
              value={servise}
            >
              <option>Boda</option>
              <option>Eventos</option>
              <option>Cocina</option>
              <option>Corporativo</option>
              <option>Moda</option>
            </select>
          </div>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <textarea
            className="
form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      h-10
      flex justify-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLg"
        >
          Solicitar
        </button>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        {isLoaded == false ? (
          <div>Loading...</div>
        ) : (
          // <LoadScript
          //   googleMapsApiKey={`${process.env.GOOGLE_MAPS_API}`}
          //   libraries={["places"]}
          // >
          <GoogleMap
            zoom={zoom}
            center={center}
            mapContainerClassName="map-container"
          >
            {selected && <Marker position={selected} />}
          </GoogleMap>
          // </LoadScript>
        )}
      </div>
    </form>
  );
};
const PlacesAutocomplete = ({
  setSelected,
  setCenter,
  setZoom,
  setLocation,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    setCenter({ lat, lng });
    setZoom(15);
    setLocation(address);
    console.log(address);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder="Buscar una dirección"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};