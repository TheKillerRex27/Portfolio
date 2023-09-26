import React from 'react'
import html from '../assets/HTML5.png'
import css from '../assets/CSS3.png'
import javascript from '../assets/javascript.png'
import Rlogo from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import git from '../assets/git.png'
import '../styles/Skills.css'

function Skills() {
  return (
    <section className='skills-section' id='skills'>
      <h2 className='skills-title'>SKILLS</h2>
      <div className='using-now'>
        <h3 className='tech-logos-title'>USING NOW</h3>
        <div className='tech-logos'>
            <div className='tech-block' >
                <img src={html} className='tech-logo' />
                <p className='tech-name'>HTML5</p>
            </div>
            <div className='tech-block' >
                <img src={css} className='tech-logo' />
                <p className='tech-name'>CSS3</p>
            </div>
            <div className='tech-block' >
                <img src={javascript} className='tech-logo' />
                <p className='tech-name'>JAVASCRIPT</p>
            </div>
            <div className='tech-block' >
                <img src={Rlogo} className='tech-logo' />
                <p className='tech-name'>REACT</p>
            </div>
            <div className='tech-block' >
                <img src={bootstrap} className='tech-logo' />
                <p className='tech-name'>BOOTSTRAP</p>
            </div>
            <div className='tech-block' >
                <img src={git} className='tech-logo' />
                <p className='tech-name'>GIT</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills