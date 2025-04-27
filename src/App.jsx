import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Tickets from './pages/Tickets'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tickets' element={<Tickets />} />

        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div>
  )
}

export default App
