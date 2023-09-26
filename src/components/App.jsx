import { useState } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import OccupationSection from './OccupationSection'
import AboutMe from './AboutMe'
import Skills from './Skills'
import PortfolioSection from './PortfolioSection'
import ContactMe from './ContactMe'
import Footer from './Footer'
import seperator from '../assets/separator-black-1.png'
import '../styles/App.css'

function App() {

  return (
    <main className='portfolio'>
      <Navbar />
      <HeroSection />
      <OccupationSection />
      <AboutMe />
      <img src={seperator} alt='seperator' style={{ margin: 'auto', width: '10rem' }} />
      <Skills />
      <PortfolioSection />
      <ContactMe />
      <Footer />
    </main>
  )
}

export default App
