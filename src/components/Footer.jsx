import { Facebook, Instagram, Twitter, YoutubeIcon } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-neutral-800 py-5 px-2 md:px-20'>
            <div className='md:flex items-center justify-between py-5 md:py-16 border-b border-[#A1A1AA]'>
                <div className='flex flex-col gap-5 w-1/2'>
                    <div className='h-12 w-12 md:block'>
                        <img className='h-full w-full object-cover' src="https://kunal.classicoder.com/logo.png" alt="" />
                    </div>
                    <p className='capitalize text-xl text-white'>the kunal kamra app</p>
                    <div className='flex items-center gap-5 cursor-pointer'>
                       <Facebook color='blue'/>
                       <Twitter color='blue'/>
                       <YoutubeIcon color='red'/>
                       <Instagram color='green'/>
                    </div>
                </div>

                <div className='block pt-5 md:flex items-start justify-between w-1/2'>
                    <div>
                        <h2 className='text-xl text-white py-5 font-semibold'>Quick Links</h2>
                        <div className='flex flex-col items-start gap-2'>
                            {
                                ["home", "gallery", "upcoming shows", "podcasts","articles"].map((item, index)=>(
                                    <a href="#" 
                                    key={index}
                                    className='inline-block capitalize text-[#A1A1AA] hover:text-white transition-colors text-base'
                                    >{item}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl text-white py-5 font-semibold'>Support</h2>
                        <div className='flex flex-col items-start gap-2'>
                            {
                                ["contact us", "help", "FAQ "].map((item, index)=>(
                                    <a href="#" 
                                    key={index}
                                    className='inline-block capitalize text-[#A1A1AA] hover:text-white transition-colors text-base'
                                    >{item}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl text-white py-5 font-semibold'>Legal</h2>
                        <div className='flex flex-col items-start gap-2'>
                            {
                                ["disclaimer", "terms of service", "privacy policy", "refunds & cancellation policy"].map((item, index)=>(
                                    <a href="#" 
                                    key={index}
                                    className='inline-block capitalize text-[#A1A1AA] hover:text-white transition-colors text-base'
                                    >{item}</a>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
            </div>

            <p className='capitalize text-[#A1A1AA] text-sm  py-2 md:pb-10'>&copy; 2025 kunal kamra. all rights reserved</p>
        </div>
    )
}

export default Footer
