import React from 'react'
import Button from './Button'

function Article({ title, date, description }) {
    return (
        <div className='bg-neutral-800 rounded-2xl p-6 mb-12'>
            <div>
                <div>
                    <h3 className='text-xl text-white font-medium mb-1'>{title}</h3>
                    <span className='text-neutral-400 text-sm mb-3'>{date}</span>
                </div>
                <p className='text-neutral-300 text-base mb-4 line-clamp-2'>{description}</p>
            </div>
            <div className='flex justify-end'>
                <Button title={"read"} />
            </div>
        </div>
    )
}

export default Article
