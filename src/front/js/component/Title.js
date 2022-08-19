import React from "react";

export const Title = ({ titulo }) => {
  return (
    <>
      <div className="flex justify-center items-center bg-amber-500 h-1/3 py-4">
        <p className="text-title text-white font-bold text-5xl ">{titulo}</p>
      </div>
    </>
  );
};
