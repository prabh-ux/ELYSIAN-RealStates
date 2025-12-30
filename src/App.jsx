import { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Collection from './pages/Collection'
import Agents from './pages/Agents/Agents'
import Footer from './pages/Footer'
import Header from './pages/Header'
import ScrollToTop from './ScrollToTop'



export default function App() {
  

  return (
        <div className="min-h-screen bg-[#FDFCF8] text-[#1A2F23] font-serif">
         <Header/>
         <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collection' element={<Collection/>}/>
            <Route path='/agents' element={<Agents/>}/>
          </Routes>
          <Footer/>
</div>
  )
}