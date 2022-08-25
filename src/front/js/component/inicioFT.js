import React from 'react'
import { Link } from 'react-router-dom'

export const InicioFT = (props) => {
  return (
    <div className='flex h-80'>
      <div className='w-2/4 flex justify-center items-center'>
            <div className='absolute text-white text-8xl '>{props.titleimg}</div>
            <img className=' object-cover w-full h-80' src={props.image} /> 
      </div>
      <div className='w-2/4  '>
        <p className="text-title text-5xl flex justify-center items-center h-1/4 w-6/12 mx-auto bg-white mb-2 text-slate-500 font-bold">
          {props.title}
        </p>
        <hr className="hr-line" />
        <p className="text-title text-xl flex justify-center items-center w-7/12 mx-auto text-gray-400 font-semibold h-1/4 px-16 mt-3 mb-3">
          {props.text}
        </p>
        {/* <Link to="/moda"><button className="button-text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              {props.buttonname}</button>
        </Link> */}
      </div>
    </div>
  )
}
