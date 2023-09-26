import React, { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {

  return (
    <nav className='navbar'>
      <ul>
        <li className='nav-link'>
          <a href='#about-me'>About Me</a>
        </li>
        <li className='nav-link' >
          <a href='#skills'>Skills</a>
        </li>
        <li className='nav-link'>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact-me'>
            <button className='contact-button'>CONTACT ME</button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
