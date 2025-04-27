import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Marquee from '../components/Marquee'
import UpcomingShow from '../components/UpcomingShow'
import Podcasts from '../components/Podcasts'
import LatestUpdates from '../components/LatestUpdates'
import RecentArticles from '../components/RecentArticles'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main className='bg-[#171717] text-white'>
                <Hero />
                <About />
                <Marquee />
                <UpcomingShow />
                <Podcasts />
                <LatestUpdates />
                <RecentArticles />
            </main>
            <Footer />
        </>
    )
}

export default Home
