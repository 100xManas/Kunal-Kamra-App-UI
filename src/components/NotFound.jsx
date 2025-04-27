import React from 'react'
import { FileSearch, Home, ArrowLeft } from 'lucide-react';

function NotFound() {
    return (
        <div className='w-full h-screen bg-neutral-900 text-white relative overflow-hidden'>
            
            <div className='flex w-full h-screen items-center justify-center flex-col'>
                <div className='relative flex flex-col items-center justify-center'>
                    <div style={{filter: 'drop-shadow(0 0 2em #510000)'}} className='flex items-center justify-center h-6 w-6 bg-red-500 rounded-full'>
                        <div className='h-3 w-3 bg-neutral-50 rounded-full'></div>
                    </div>
                    <FileSearch size={45} color='red' className='ml-20' />

                    <div className='absolute -right-4 top-6 h-2 w-2 bg-orange-500 rounded-full animate-bounce'></div>
                    <div className='absolute -left-2 bottom-0 h-1 w-1 bg-red-400 rounded-full animate-bounce'></div>
                </div>

                <div className='text-center relative'>
                    <h2 className="text-7xl text-orange-500 font-bold pt-10 animate-pulse">404</h2>
                    <h3 className='text-3xl font-semibold capitalize py-2'>Page Not Found</h3>
                    <p className='text-sm w-96 text-neutral-400 max-w-md px-4'>Sorry, the page you're looking for doesn't exist or has been moved.</p>

                    <div className='absolute -right-8 top-12 h-2 w-2 bg-red-500 rounded-full animate-bounce'></div>
                    <div className='absolute -left-12 bottom-2 h-3 w-3 bg-orange-600 rounded-full opacity-60 animate-bounce'></div>
                </div>

                <div className='flex items-center gap-5 py-10 relative'>
                    <button className='flex items-center gap-3 cursor-pointer px-10 py-3 rounded-lg text-md font-semibold bg-red-600 hover:bg-transparent border transition ease-in-out duration-300 border-neutral-700'>
                        <Home /> Home
                    </button>
                    <button className='flex items-center gap-3 cursor-pointer px-10 py-3 rounded-lg text-md font-semibold border border-neutral-700 hover:bg-red-600 transition ease-in-out duration-300'>
                        <ArrowLeft /> Go Back
                    </button>

                </div>
            </div>
        </div>
    )
}

export default NotFound