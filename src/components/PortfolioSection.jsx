import React from 'react'
import Project1 from '../assets/Project-Screenshot-1.png'
import Project2 from '../assets/Project-Screenshot-2.png'
import Project3 from '../assets/Project-Screenshot-3.png'
import Project4 from '../assets/Project-Screenshot-4.png'
import Project5 from '../assets/Project-Screenshot-5.png'
import Project6 from '../assets/Project-Screenshot-6.png'
import '../styles/PortfolioSection.css'

function PortfolioSection() {
  return (
    <section className='portfolio-section' id='portfolio'>
      <h2 className='portfolio-title'>PORTFOLIO</h2>
      <div className='projects'>
        <a href='https://github.com/TheKillerRex27/Weather-App-Project' ><img className='project-screenshot' src={Project1} alt='Project Screenshot' /></a>
        <a href='https://github.com/TheKillerRex27/Interactive-Rating-Component' ><img className='project-screenshot' src={Project2} alt='Project Screenshot' /></a>
        <a href='https://github.com/TheKillerRex27/MovieBox' ><img className='project-screenshot' src={Project3} alt='Project Screenshot' /></a>
        <a href='https://github.com/TheKillerRex27/react-image-gallery' ><img className='project-screenshot' src={Project4} alt='Project Screenshot' /></a>
        <a href='https://github.com/TheKillerRex27/Library-Management-System' ><img className='project-screenshot' src={Project5} alt='Project Screenshot' /></a>
        <a href='https://github.com/TheKillerRex27/space-tourism-website/' ><img className='project-screenshot' src={Project6} alt='Project Screenshot' /></a>
      </div>
    </section>
  )
}

export default PortfolioSection;