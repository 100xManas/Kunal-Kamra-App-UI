import React from 'react'
import { motion } from "motion/react"

function Marquee() {

    const marqueeItems = [
        "https://kunal.classicoder.com/images/image-1.png",
        "https://kunal.classicoder.com/images/image-2.png",
        "https://kunal.classicoder.com/images/image-3.png",
        "https://kunal.classicoder.com/images/image-4.png",
    ]

    return (
        <div className='pb-2 md:pb-10 flex items-center justify-center'>
            <div className='w-[88vw] h-65 overflow-hidden flex items-center gap-5'>
                <motion.div
                    className='flex items-center gap-5'
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {
                        marqueeItems.map((item, index) => (
                            <div key={index} className='h-40 w-64 md:h-60 md:w-[25vw] rounded-2xl overflow-hidden'>
                                <img src={item} alt="" className='h-full w-full object-cover' />
                            </div>
                        ))
                    }
                </motion.div>

                <motion.div
                    className='flex items-center gap-5'
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {
                        marqueeItems.map((item, index) => (
                            <div key={index} className='h-60 w-[25vw] rounded-2xl overflow-hidden'>
                                <img src={item} alt="" className='h-full w-full object-cover' />
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Marquee
