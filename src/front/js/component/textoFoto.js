import React from 'react'

export const TextoFoto = (props) => {
  return (
    <div className='flex h-3/5'>
        <div className='w-2/4  '>
            <p className="text-title text-3xl flex justify-center items-center h-1/4 w-6/12 mx-auto bg-white mb-2 text-slate-500 font-bold">
            {props.title}
            </p>
            <hr className="hr-line" />
            <p className="text-title text-xl flex justify-center items-center w-7/12 mx-auto text-teal-600 font-semibold h-1/4 px-16 mt-3 mb-3">
            {props.text}
            </p>
            
        </div>
        <div className='w-2/4  '>
            <img className=' object-cover w-full' src={props.image} />
        </div>
    </div>
  )
}
