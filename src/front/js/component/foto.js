import React from "react";

export const Foto = (props) => {
  return (
    <div className="p-0 m-0 rounded-lg shadow-lg  ">
      <img className="icon" src={props.url} />
    </div>
  );
};
