import React from 'react'
import './Footer.css'
import logo from '../../assets/fashion.png'

export default function Footer() {
  return (
    <div>
      <div className='footer-section'>
      <div className='footer'>
        <div className='org-about'>
          <img src={logo} alt="logo" className='footer-logo' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      <ul>
        <li><h2>Important Links</h2></li>
        <li>Home</li>
        <li>Collection</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li><h2>Customer Policies</h2></li>
        <li><a>FAQ</a></li>
        <li>T&C</li>
        <li>Terms of Use</li>
        <li>Privacy policy</li>
      </ul>
      <ul>
        <li><h2>Get In Touch</h2></li>
        <li>+91 9874563210</li>
        <li>fashion@gmail.com</li>
      </ul>
      </div>
      <div className='copyright'>
        <hr />
        <p>All rights are reserved | Copyright @VEleve2024</p>
      </div>
    </div>
    </div>
  )
}
