import React from "react";

export const Title = ({ titulo }) => {
  return (
    <>
      <div className="flex justify-center items-center bg-amber-500 h-1/5">
        <p className="text-title text-white text-2xl">{titulo}</p>
      </div>
    </>
  );
};
