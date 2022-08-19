import React from "react";

export const Foto = (props) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">
      <img src={props.url} />
    </div>
  );
};
