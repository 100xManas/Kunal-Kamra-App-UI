import React from 'react'

function Card({imgURL, heading}) {
  return (
    <div className='max-w-[350px]'>
      <div className='rounded-xl overflow-hidden cursor-pointer'>
        <img src={imgURL} alt="" className='h-full w-full object-cover hover:scale-105 transition duration-300 ease-in-out' />
      </div>
      <h2 className='font-bold line-clamp-2 mt-3 text-neutral-50 text-base'>{heading}</h2>
    </div>
  )
}

export default Card
