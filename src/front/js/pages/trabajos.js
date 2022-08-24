import React from "react";
import { Title } from "../component/title";

export const Trabajos = () => {
  return (
    <div className="pt-32">
        <Title titulo="Mis trabajos"/>
        <div className="h-screen">
            <div className=" flex justify-center">
                <div class="mt-5 grid grid-cols-1 gap-2 ">
                <div className="1 flex gap-4">
                        <div>
                        nombre
                        </div>

                        <div>
                        fecha
                        </div>

                        <div>
                        servicio
                        </div>
                        
                        <div>
                        link
                        </div>
                    </div>
                    <div className="1 flex gap-4">
                        <div>
                        nombre
                        </div>

                        <div>
                        fecha
                        </div>

                        <div>
                        servicio
                        </div>
                        
                        <div>
                        link
                        </div>
                    </div>
                    <div className="1 flex gap-4">
                        <div>
                        nombre
                        </div>

                        <div>
                        fecha
                        </div>

                        <div>
                        servicio
                        </div>
                        
                        <div>
                        link
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};
