import React from 'react'
import Github from '../assets/Github-footer.svg'
import LinkedIn from '../assets/Linkedin-footer.svg'
import Email from '../assets/Mail-footer.svg'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <a className='back-top' href='#'>BACK TO TOP</a>
      <div className='socials'>
        <a href='https://github.com/TheKillerRex27' ><img src={Github} /></a>
        <a href='https://linkedin.com/in/alex-nwafor-4a032a214/' ><img src={LinkedIn} /></a>
        <a href='mailto:alexnwafor27@gmail.com' ><img src={Email} /></a>
      </div>
      <p className='footer-text' ><b>@2023 Alex Nwafor</b> All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;