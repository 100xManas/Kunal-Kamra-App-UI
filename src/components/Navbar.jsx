import React, { useState } from 'react'
import { Search, Menu } from 'lucide-react';
import Button from './Button'

function Navbar() {

    const [activeIndex, setActiveIndex] = useState(1)
    const [search, setSearch] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex items-center px-4 lg:px-20 justify-between fixed w-full h-16 top-0 bg-[#171717] text-white z-50'>
            <div className='flex items-center gap-5'>
                <div className='block md:hidden'>
                    <Menu className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                </div>
                <div className='h-12 w-12 hidden md:block'>
                    <img className='h-full w-full object-cover' src="https://kunal.classicoder.com/logo.png" alt="" />
                </div>
                <div className='hidden md:flex items-center'>
                    {
                        ["home", "tickets", "gallery", "episodes", "podcasts", "merch"].map((item, index) => (
                            <a href={`/${item}`}
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`capitalize block px-4 text-sm hover:scale-105 hover:text-white text-gray-300 transition duration-150  ${activeIndex == index ? "font-semibold text-red-500" : ""}`}
                            >{item}</a>
                        ))
                    }
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='hidden md:flex items-center justify-between border-2 border-neutral-500 px-3 bg-neutral-800 py-2 rounded-xl w-[300px] transition duration-300 focus-within:ring-2 focus-within:ring-red-600'>
                    <input type="text" placeholder="Search" className="outline-none w-full bg-transparent" onChange={(e) => setSearch(e.target.value)} />
                    <Search size={18} className="cursor-pointer" />
                </div>

                <Button title={"login"} />
            </div>

            {
                isOpen && (
                    <div className='absolute top-16 left-0 w-full bg-[#171717] text-white flex flex-col items-start py-2 px-2 transition duration-300 md:hidden'>
                        <div className='flex items-center justify-center w-full'>
                            <div className='flex items-center justify-between border border-neutral-500 bg-neutral-800 px-3 py-2 rounded-xl w-full transition duration-300 focus-within:ring-2 focus-within:ring-red-600'>
                                <input type="text" placeholder="Search" className="outline-none w-full bg-transparent" onChange={(e) => setSearch(e.target.value)} />
                                <Search size={18} className="cursor-pointer" />
                            </div>
                        </div>

                        <div className='flex flex-col items-start w-full pt-4'>
                            {
                                ["home", "tickets", "gallery", "episodes", "podcasts", "merch"].map((item, index) => (
                                    <a href="#"
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`capitalize block w-full px-1 py-3 ${index == 5 ? "border-0" : "border-b border-neutral-700"} text-md hover:scale-105 hover:text-white transition duration-150  ${activeIndex == index ? "font-semibold text-red-500" : ""}`}
                                    >{item}</a>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar
