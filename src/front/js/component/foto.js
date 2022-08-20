import React from "react";

export const Foto = (props) => {
  return (
    <div className="p-0 m-0 rounded-lg shadow-lg w-30  ">
      <img className="w-full" src={props.url} />
    </div>
  );
};
