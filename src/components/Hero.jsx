import React from 'react'

function Hero() {
    return (
        <div className='w-full  px-0 sm:px-4 md:px-8 lg:px-20 h-[445px] md:h-[537px] bg-gradient-to-b from-[#171717] to-[#510000] '>
            <div className="absolute md:top-10 left-1/2 sm:top-10 -translate-x-1/2 md:left-[50%] lg:top-13 top-5 w-[320px] md:w-[420px] h-[599px] ">
                <img src="https://kunal.classicoder.com/kunal-hero.png" alt="" className='h-full w-full object-contain' />
            </div>

            <div className='relative w-full max-w-auto mx-auto px-4 mt-16 z-10'>
                <div className='pt-64 md:pt-60 '>
                    <div>
                        <span className='md:text-5xl text-white font-medium mb-2 text-2xl md:mb-6'>welcome to the</span>
                    </div>

                    <div className='relative'>
                        <h1 className='xl:text-[154px] lg:text-[130px] md:text-[130px] text-[60px] font-black leading-14 md:leading-[123.20px] text-white'>
                            KUN
                            <span className='relative inline-block mx-1' style={{ WebkitTextStroke: "1.5px white", WebkitTextFillColor: "transparent" }}>
                                AL
                            </span>
                            <span className='relative inline-block mx-1 ml-10' style={{ WebkitTextStroke: "1.5px white", WebkitTextFillColor: "transparent" }}>
                                KA
                            </span>
                            MRA
                        </h1>

                        <div className="absolute lg:right-16 lg:leading-8 xl:right-30 xl:top-34 sm:-bottom-6 xl:leading-6 right-0 text-white text-2xl md:text-5xl font-medium">app</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
