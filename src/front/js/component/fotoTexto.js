import React from 'react'
import { Link } from 'react-router-dom'

export const FotoTexto = (props) => {
  return (
    <div className='flex h-3/5'>
      <div className='w-2/4  '>
            <img className=' object-cover w-full' src={props.image} />
      </div>
      <div className='w-2/4  '>
        <p className="text-title text-3xl flex justify-center items-center h-1/4 w-6/12 mx-auto bg-white mb-2 text-slate-500 font-bold">
          {props.title}
        </p>
        <hr className="hr-line" />
        <p className="text-title text-xl flex justify-center items-center w-7/12 mx-auto text-teal-600 font-semibold h-1/4 px-16 mt-3 mb-3">
          {props.text}
        </p>
      </div>
    </div>
  )
}

            // <Link to="/moda"><button className="button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            //   {props.buttonname}
            // </button></Link>