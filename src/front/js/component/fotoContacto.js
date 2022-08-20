import React from 'react'

export const FotoContacto = () => {
  return (
    <div className='flex h-3/5'>
        <div className='w-2/4'>
            <img className=' object-cover w-full' src='https://yt3.ggpht.com/2pCucky9qR9xC7J7ArrgOk24bZ-SoEXITP1LGIdj82y-wALDmbfRw6t17c7wTWfK2wzRB-IS=s900-c-k-c0x00ffffff-no-rj' />
        </div>
        <div className='w-2/4  '>
            <p className="text-title text-3xl flex justify-center items-center h-1/4 w-6/12 mx-auto bg-white mb-2 text-slate-500 font-bold">
            Food, Beverage, Still Life ... the good to photograph
            </p>
            <hr className="hr-line" />
            <p className="text-title text-xl flex justify-center items-center w-7/12 mx-auto text-teal-600 font-semibold h-1/4 px-16 mt-3 mb-3">
            Commercial images for restaurants, menus, catalogs, cookbooks, food
            companies, producers, farms, blogs and food sector publishing.
            </p>
            
        </div>
    </div>
  )
}
