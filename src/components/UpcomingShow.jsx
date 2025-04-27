import React from 'react'
import Button from './Button'
import { Calendar, Timer, Clock, MapPin } from 'lucide-react';


function UpcomingShow() {

    const upcomigShows = [
        {
            title: "KUNAL KAMRA STAND UP| PADHE LIKHE YA SOCHE SAMJHE",
            date: "27 May 2025",
            duration: "120 mins",
            time: "8.00 PM",
            venue: "Sample Venue, Sample City",
            price: "500"
        },
        {
            title: "Comedy Munch: Fresher Thoughts by Kunal Kamra",
            date: "27 May 2025",
            duration: "120 mins",
            time: "8.00 PM",
            venue: "Sample Venue, Sample City",
            price: "100"
        },
        {
            title: "Modi Modi Modi | Kunal Kamra Standup Comedy",
            date: "27 May 2025",
            duration: "120 mins",
            time: "8.00 PM",
            venue: "Sample Venue, Sample City",
            price: "1000"
        },
        {
            title: "KUNAL KAMRA STAND UP - Bangalore 2025 | PROPAGANDA",
            date: "27 May 2025",
            duration: "120 mins",
            time: "8.00 PM",
            venue: "Sample Venue, Sample City",
            price: "500"
        },
        {
            title: "Kunal Kamra - Live in Dubai | A Stand-up Comedy Show",
            date: "27 May 2025",
            duration: "120 mins",
            time: "8.00 PM",
            venue: "Sample Venue, Sample City",
            price: "1000"
        },
    ]

    return (
        <div className='px-2 md:px-24 md:py-5 py-2'>
            <div className='flex items-center justify-between pb-7 md:py-10'>
                <h1 className='text-xl md:text-3xl font-bold capitalize'>Upcoming shows</h1>
                <Button title={"Browse all"} bgColor='bg-white' />
            </div>

            <div className='flex items-center gap-10 flex-wrap'>
                {
                    upcomigShows.map((item, index) => (
                        <div key={index} className="bg-neutral-800 rounded-[20px] p-6 text-white w-90 h-105 aspect-[1/1.4] flex flex-col">
                            <h1 className='font-bold'>{item.title}</h1>
                            <div>
                                <div className='flex items-center gap-5 py-2'>
                                    <Calendar color='red' />
                                    <div>
                                        <p className='capitalize text-xs text-neutral-400'>date</p>
                                        <p className='text-neutral-200 font-light'>{item.date}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 py-2'>
                                    <Timer color='red' />
                                    <div>
                                        <p className='capitalize text-xs text-neutral-400'>duration</p>
                                        <p className='text-neutral-200 font-light'>{item.duration}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 py-2'>
                                    <Clock color='red' />
                                    <div>
                                        <p className='capitalize text-xs text-neutral-400'>time</p>
                                        <p className='text-neutral-200 font-light'>{item.time}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 py-2'>
                                    <MapPin color='red' />
                                    <div>
                                        <p className='capitalize text-xs text-neutral-400'>Venue</p>
                                        <p className='text-neutral-200 font-light'>{item.venue}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center justify-between w-full py-6'>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-4'></div>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-2'></div>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-2'></div>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-4'></div>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-2'></div>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-2'></div>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-4'></div>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-2'></div>
                                <div className='h-[3px] rounded-full bg-neutral-900 w-4'></div>
                            </div>

                            <div className='flex items-center justify-between py-2'>
                                <div>
                                    <span className='text-2xl font-bold'>₹{Number(item.price).toLocaleString()}</span>
                                    <p className='capitalize text-xs text-neutral-400'>onwards</p>
                                </div>
                                <Button title={"Book now"} />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default UpcomingShow
