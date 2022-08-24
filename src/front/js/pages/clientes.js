import React from 'react'
import { Title } from "../component/title";

export const Clientes = () => {
  return (
    <div className='px-0 pt-32 '>
        <Title titulo="Clientes"/>
        <div className='h-screen flex justify-center'>
            <div className='mt-5'>
                <p>Kimberling Ortega</p>
                <p>Roberto De Freitas</p>
                <p>Xavier Silva</p>
            </div>
        </div>

    </div>
  );
};