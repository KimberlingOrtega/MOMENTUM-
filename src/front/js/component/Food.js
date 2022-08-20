import React from "react";
import { Modal } from "../component/Modal";
import { Foto } from "../component/Foto";
import { Description } from "../component/Description";
import { Title } from "../component/Title";

export const Food = (props) => {
  return (
    <div className=" w-1/5 flex bg-lime-400 mx-1.5 my-1.5">
      <Title />
      <Description />
      <img src={props.url} className="w-full  " />
      <Foto />
      <Modal />
    </div>
  );
};
