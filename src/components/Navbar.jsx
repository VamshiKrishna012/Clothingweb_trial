import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../assets/fashion.png'

export default function Navbar() {
  return (
    <nav className='nav'>
      <div className="col-12 col-md-3">
        <img src={logo} alt="" /> 
      </div>
      <ul className='nav-menu col-12 col-md-6 mt-2 mt-md-6'>
        <Link className='nav-li' to={'/'}>Home</Link>
        <Link className='nav-li' to={'/collection'}>Collection</Link>
        <Link className='nav-li' to={'/about'}>About</Link>
        <Link className='nav-li' to={'/contact'}>Contact</Link>
      </ul>
      <ul className="nav-menu col-12 col-md-3 mt-4 mt-md-0">
        <Link className='nav-li'>Cart</Link>
        <Link className='nav-li'>Profile</Link>
      </ul>
    </nav>
  )
}

