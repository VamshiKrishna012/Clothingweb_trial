import React from 'react'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}
