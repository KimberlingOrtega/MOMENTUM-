import React from 'react'
import { Title } from '../component/title';

export const Admin = () => {
  return (
    <div className="pt-32">
        <Title titulo="Mis trabajos"/>
        <div className="h-screen">
            <div className=" flex justify-center">
                <div class="mt-5 grid grid-cols-1 gap-2 ">
                <div className="1 flex ">
                        <div className=''>
                        <input  type="text" name="name" required  placeholder='hola'></input>
                        </div>

                        <div>
                        <input  type="text" name="name" required  ></input>
                        </div>

                        <div>
                        <input  type="text" name="name" required  ></input>
                        </div>
                        
                        <div>
                        <input  type="text" name="name" required  ></input>
                        </div>
                        
                        <div>
                        boton
                        </div>
                    </div>
                    <div className="1 flex gap-4">
                        <div className='w-48'>
                        nombre
                        </div>

                        <div className='w-48 ml-5'>
                        fecha
                        </div>

                        <div className='w-48'>
                        servicio
                        </div>
                        <div className='w-48'>
                        link
                        </div>
                        <div>
                        boton
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
                        link
                        <div>
                        boton
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

                        <div>
                        boton
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};
