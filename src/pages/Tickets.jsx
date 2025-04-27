import React from 'react'
import Navbar from '../components/Navbar'
import BookTickets from '../components/BookTickets'
import Footer from '../components/Footer'
import UpcomingShow from '../components/UpcomingShow'

function Tickets() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main className='bg-[#171717] text-white '>
                <BookTickets />
                <div className='py-10'>
                <UpcomingShow />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Tickets
