import React from 'react'

export const TextoFoto = (props) => {
  return (
    <div className='flex h-3/5'>
        <div className='w-2/4 object-container '>

        <p className="text-title text-5xl flex justify-center items-center pt-4 mb-4 mx-auto bg-white text-slate-500 font-bold">
          {props.title}
        </p>

            
        <p className="text-title text-4xl flex justify-center items-center  mx-auto text-gray-400 font-semibold px-16 mt-3 mb-3">
        {props.text}
        </p>
        
        </div>
        <div className='w-2/4  '>
            <img className=' object-cover w-full' src={props.image} />
        </div>
    </div>
  )
}
