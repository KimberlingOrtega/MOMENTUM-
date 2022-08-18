import React from "react";
import { Title } from "../component/Title";
import { Description } from "../component/Description";

export const Moda = () => {
  return (
    <>
      <div className="container h-screen pt-32">
        <div className="grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">01</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">02</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">03</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">04</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">05</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">06</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">07</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">08</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">09</div>
        </div>
      </div>
    </>
  );
};
