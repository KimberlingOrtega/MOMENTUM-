import React from "react";

export const Title = ({ titulo }) => {
  return (
    <>
      <div className="flex justify-center items-center h-1/3 py-4 titlecomponent">
        <p className="text-title text-white font-bold text-5xl ">{titulo}</p>
      </div>
    </>
  );
};
