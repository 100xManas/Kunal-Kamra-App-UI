import React from 'react'

function About() {
  return (
    <div className= 'flex items-center justify-center flex-col px-20 w-full py-5 md:py-10'>
      <div className='flex items-center gap-4 md:gap-10 justify-center pb-5 md:pb-10'>
        <span className='inline-block h-[1px] bg-white w-20 md:w-50 rounded-full'></span>
        <h1 className='capitalize  text-md md:text-5xl font-bold text-center'>about kunal</h1>
        <span className='inline-block h-[1px] bg-white w-20 md:w-50 rounded-full'></span>
      </div>
      <p className='text-base font-bold text-center w-[80vw] p-1 leading-relaxed md:max-w-5xl md:text-lg'>Kunal Kamra is a Bombay based stand-up comedian and host of the popular political-comedy podcast Shut Up Ya Kunal. After 8 years in advertising, Kunal started doing stand-up in 2013. He rose through the ranks at blistering pace and is currently well established as one of India's most important and popular voices on stage and social media, known for his fearless, incisive and often polarizing material. He is also one of the very few from the Indian scene who is a comedian's comedian as well as popular amongst the masses who sells out venues regularly across the country.</p>
    </div>
  )
}

export default About
