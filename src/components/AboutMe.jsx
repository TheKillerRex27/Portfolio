import React from 'react'
import seperator from '../assets/separator-black-1.png'
import '../styles/AboutMe.css'

function AboutMe() {
  return (
    <section className='about-me-section' id='about-me'>
      <h2 className='about-me-title'>ABOUT ME</h2>
      <p className='about-me-text'>I am a 21 year old Computer Science Student from Nigeria. As an accomplished web developer with a passion for problem-solving and innovation, I thrive in collaborative environments where I can apply my technical expertise to develop cutting-edge solutions. With a strong foundation in full-stack development and a track record of delivering high-quality products, I am committed to continuously learning and staying up-to-date with emerging technologies. I'm excited to contribute my skills and dedication to a forward-thinking team that shares my vision for creating impactful software solutions.</p>
      <img src={seperator} alt='seperator' style={{ width: '10rem' }} />
      <div className='about-fields'>
        <h3 className='field-title'>Development</h3>
        <p className='field-text'>I specialize in the development of meticulously crafted, responsive, and aesthetically pleasing websites that harmonize seamlessly with your discerning preferences.</p>
      </div>
      <div className='about-fields'>
        <h3 className='field-title'>Maintenance</h3>
        <p className='field-text'>Moreover, I am dedicated to the ongoing maintenance and optimization of these websites, ensuring their continued excellence and performance in accordance with the highest standards of professionalism.</p>
      </div>
    </section>
  )
}

export default AboutMe;