import React from 'react'
import Button from './Button'
import Card from './Card'

function Podcasts() {
    return (
        <div className='px-2 md:px-24 md:py-5 py-2'>
            <div className='flex items-center justify-between pb-7 md:py-5'>
                <h1 className='text-xl md:text-3xl font-bold capitalize'>Podcasts</h1>
                <Button title={"Browse all"} bgColor='bg-white' />
            </div>

            <div className='flex items-center justify-between gap-16 flex-wrap'>
                <Card imgURL={"https://kunal.classicoder.com/podcast-1.png"} heading={"How Govt Is Destroying Universities in India | Nope ft. Apoorvanand | Episode 002"} />
                <Card imgURL={"https://kunal.classicoder.com/podcast-1.png"} heading={"How Govt Is Destroying Universities in India | Nope ft. Apoorvanand | Episode 002"} />
                <Card imgURL={"https://kunal.classicoder.com/podcast-1.png"} heading={"How Govt Is Destroying Universities in India | Nope ft. Apoorvanand |..."} />
                <Card imgURL={"https://kunal.classicoder.com/podcast-1.png"} heading={"How Govt Is Destroying Universities in India | Nope ft. Apoorvanand |..."} />
                <Card imgURL={"https://kunal.classicoder.com/podcast-1.png"} heading={"How Govt Is Destroying Universities in India | Nope ft. Apoorvanand |..."} />
                <Card imgURL={"https://kunal.classicoder.com/podcast-1.png"} heading={"How Govt Is Destroying Universities in India | Nope ft. Apoorvanand |..."} />
            </div>
        </div>
    )
}

export default Podcasts
