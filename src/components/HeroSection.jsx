import React from 'react'
import Github from '../assets/Github.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import Pyro from '../assets/Pyro.png'
import '../styles/HeroSection.css'

function Home() {
  return (
    <section className='hero-section'>
      <div className='title'>
        <div className='hero-details'>
          <p className='hero-intro'>Hi, I am</p>
          <h1 className='hero-name'>Alex Nwafor</h1>
          <p className='hero-title'>Frontend Developer</p>
        </div>
        <div className='work-links'>
          <a href='https://github.com/TheKillerRex27'>
            <button className='work-link'>
              <img src={Github} alt='Github' />
            </button>
          </a>
          <a href='https://www.linkedin.com/in/alex-nwafor-4a032a214/'>
            <button className='work-link'>
            <img src={LinkedIn} alt='LinkedIn' />
            </button>
          </a>
        </div>
      </div>
      <img className='hero-logo' src={Pyro} />
    </section>
  )
}

export default Home;