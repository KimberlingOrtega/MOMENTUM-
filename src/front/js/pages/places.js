import React, { useState, useMemo, useEffect } from "react";
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

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  //const center = useMemo(() => ({ lat: 10.5, lng: -66.917 }), []);
  const [selected, setSelected] = useState(null);
  const [center, setCenter] = useState({ lat: 10.5, lng: -66.917 });
  const [zoom, setZoom] = useState(10);
  useEffect(() => {}, [center]);
  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete
          setSelected={setSelected}
          setCenter={setCenter}
          setZoom={setZoom}
        />
      </div>

      <GoogleMap
        zoom={zoom}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected, setCenter, setZoom }) => {
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
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
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
