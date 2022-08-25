import React from 'react'
import { Link } from 'react-router-dom'

export const FotoTexto = (props) => {
  return (
    <div className='flex h-3/5'>
      <div className='w-2/4  '>
            <img className=' object-cover w-full' src={props.image} />
      </div>
      <div className='w-2/4 object-container '>

        <p className="text-title text-4xl flex justify-center items-center  mx-auto text-gray-400 font-semibold px-16 mt-8 mb-3">
        {props.text}
        </p>

        <p className="text-title text-4xl flex justify-center items-center  mx-auto text-gray-400 font-semibold px-16 mt-8 mb-3">{props.finaltext}</p>
        
        </div>
    </div>
  )
}

            // <Link to="/moda"><button className="button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            //   {props.buttonname}
            // </button></Link>