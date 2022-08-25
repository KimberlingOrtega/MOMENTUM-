import React from "react";

export const Description = (props) => {
  return (
    <>
      <div className="  h-80  pt-6">
        <p className="text-title text-6xl flex justify-center items-center h-1/4 w-6/12 mx-auto bg-white mb-2 text-slate-500 font-bold">
          {props.title}
        </p>
        <hr className="hr-line mb-12" />
        <p className="text-title text-4xl flex justify-center items-center w-7/12 mx-auto text-gray-400 font-semibold h-1/4 px-16 mt-3 mb-3">
        {props.text}
        </p>

      </div>
    </>
  );
};
