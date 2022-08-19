import React from "react";

export const Food = (props) => {
  return (
    <div className=" w-1/5 flex bg-lime-400 mx-1.5 my-1.5">
      <img src={props.url} className="w-full  " />
    </div>
  );
};
