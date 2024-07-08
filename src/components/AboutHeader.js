import React from 'react'
import cover from '../img/about_cover.png'

export default function AboutHeader() {
  return (
    <div>
      <div className="bg-[#3A5A40] absolute top-0 -z-20 w-full h-[75vh] " style={{ clipPath: 'inset(0 0 0 78%)' }}>
      </div>
        <div className='flex justify-between  mt-32 -z-10 flex-wrap sm:m-28 m-10'>
          <div className='text-6xl flex items-center place-items-center sm:max-w-[45vw]'>
              <h1 className='text-[#3A5A40] mr-16 font-extrabold '>A PROPOS DE NOUS</h1>
          </div>
          <div className='text-6xl text-blue-700'>
            <img src={cover} className='rounded-md h-[50vh]  sm:h-[75vh]'/>
            
          </div>
        </div>
        
        
    </div>
  )
}
