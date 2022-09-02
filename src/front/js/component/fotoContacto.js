import React from 'react'
import { Contacto } from './contacto'

export const FotoContacto = () => {
  return (
    <div className='flex h-3/5'>
        <div className='w-2/4'>
            <img className=' object-cover w-full' src='https://yt3.ggpht.com/2pCucky9qR9xC7J7ArrgOk24bZ-SoEXITP1LGIdj82y-wALDmbfRw6t17c7wTWfK2wzRB-IS=s900-c-k-c0x00ffffff-no-rj' />
        </div>
        <div className='w-2/4  flex justify-center items-center'>
            <Contacto />
            
        </div>
    </div>
  )
}
