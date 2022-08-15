import React from 'react'

export const Menu = () => {
  return (
    <div className="shadow-md w-full fixed top-20 flex justify-center h-12 bg-white opacity-50">
        <div className=''>
            <ul className='flex space-x-7 text-4xl font-bold mt-1 '>
                <li>Inicio</li>
                <li>Bodas</li>
                <li>Eventos</li>
                <li>Comida</li>
                <li>Corporativo</li>
                <li>Moda</li>
                <li>Contacto/Cotización</li>
            </ul>
        </div>
    </div>
  )
}
