import React from 'react'

function BookTickets() {
    return (
        <div className='w-full mt-16 flex items-center justify-between rounded-br-[65px] rounded-bl-[65px] px-0 sm:px-4 md:px-8 lg:px-20 h-[445px] md:h-[537px] bg-gradient-to-b from-[#171717] to-[#510000] relative'>
            {/* Modern dots decoration */}
            <div className="absolute top-12 left-12 w-4 h-4 bg-red-500 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute top-24 left-24 w-2 h-2 bg-white rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute bottom-16 left-20 w-3 h-3 bg-red-400 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-16 right-32 w-2 h-2 bg-white rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute bottom-32 right-16 w-4 h-4 bg-red-500 rounded-full opacity-70 animate-bounce"></div>
            
            <div className="relative lg:z-10 md:z-0 sm:z-0 z-0 lg:mt-10 md:mt-20 sm:mt-22 mt-22 container mx-auto h-full flex lg:items-center md:items-start sm:items-start items-start">
                <div className="relative w-full max-w-[1200px] mx-auto px-4">
                    <div className="lg:justify-start md:justify-center sm:justify-center justify-center flex lg:text-left md:text-center sm:text-center text-center text-white text-5xl font-bold leading-[57.60px] animate-pulse relative">
                        BOOK TICKETS
                        {/* Accent dot after the text */}
                        <div className="ml-2 w-3 h-3 bg-red-500 rounded-full self-end mb-2 animate-bounce"></div>
                    </div>

                    {/* Decorative line with dot */}
                    <div className="mt-6 lg:w-48 md:w-32 sm:w-32 w-32 h-1 bg-white opacity-70 lg:mx-0 md:mx-auto sm:mx-auto mx-auto relative">
                        <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className='hidden overflow-hidden md:h-[537px] md:w-[525px] md:block relative'>
                
                <div className="absolute top-12 left-6 w-3 h-3 bg-white rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute bottom-16 right-12 w-2 h-2 bg-red-400 rounded-full opacity-70 animate-bounce"></div>


                <img src="https://kunal.classicoder.com/tickets/jokes.png" alt="" className='w-full h-full object-cover md:object-contain' />
            </div>
        </div>
    )
}

export default BookTickets