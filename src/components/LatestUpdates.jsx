import React from 'react'
import Button from './Button'
import Card from './Card'

function LatestUpdates() {
  return (
    <div className='px-2 md:px-24 md:py-5 py-2'>
            <div className='flex items-center justify-between pb-7 md:py-5'>
                <h1 className='text-xl md:text-3xl font-bold capitalize'>Latest Updates</h1>
                <Button title={"Browse all"} bgColor='bg-white' />
            </div>

            <div className='flex items-center justify-between gap-16 flex-wrap'>
                <Card imgURL={"https://kunal.classicoder.com/showThumbnail.png"} heading={"KUNAL KAMRA | STAND UP COMEDY 2019"}/>
                <Card imgURL={"https://kunal.classicoder.com/showThumbnail.png"} heading={"KUNAL KAMRA | STAND UP COMEDY 2019"}/>
                <Card imgURL={"https://kunal.classicoder.com/showThumbnail.png"} heading={"KUNAL KAMRA | STAND UP COMEDY 2019"}/>
                <Card imgURL={"https://kunal.classicoder.com/showThumbnail.png"} heading={"KUNAL KAMRA | STAND UP COMEDY 2019"}/>
            </div>
        </div>
  )
}

export default LatestUpdates
