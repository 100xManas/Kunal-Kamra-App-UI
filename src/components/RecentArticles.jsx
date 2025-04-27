import React from 'react'
import Button from './Button'
import Article from './Article'

function RecentArticles() {
    return (
        <div className='px-2 md:px-24 md:py-5 py-2'>
            <div className='flex items-center justify-between pb-7 md:py-5'>
                <h1 className='text-xl md:text-3xl font-bold capitalize'>Recent Articles</h1>
                <Button title={"Browse all"} bgColor='bg-white' />
            </div>

            <div>
                <Article title={"A really interesting title"} date={"12/04/2025"} description={"Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin."}/>
                <Article title={"A really interesting title"} date={"12/04/2025"} description={"Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin."}/>
                <Article title={"A really interesting title"} date={"12/04/2025"} description={"Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin."}/>
                <Article title={"A really interesting title"} date={"12/04/2025"} description={"Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin."}/>
                <Article title={"A really interesting title"} date={"12/04/2025"} description={"Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin. Lorem ipsum sit dolor amet epsin."}/>
            </div>
        </div>
    )
}

export default RecentArticles
