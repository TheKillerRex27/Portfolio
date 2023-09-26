import React from 'react'
import seperator from '../assets/separator-black-1.png'
import '../styles/ContactMe.css'

function ContactMe() {
  return (
    <section className='contact-me' id='contact-me'>
      <h2 className='contact-title'>CONTACT ME</h2>
      <p className='contact-text'>Please use the contact form below to get in touch. I appreciate your messages and will respond promptly. Thank you!</p>
      <img src={seperator} alt='seperator' style={{ margin: 'auto', width: '10rem' }} />
      <form className='contact-form' action='mailto:alexnwafor27@gmail.com'>
        <div>
          <label htmlFor='name'>
            <input className='form-input' id='name' type='text' placeholder='Enter Your Name'/>
          </label>
        </div>
        <div>
          <label htmlFor='email'>
            <input className='form-input' id='email' type='email' placeholder='Enter Your Email'/>
          </label>
        </div>
        <div>
          <label htmlFor='phoneNum'>
            <input className='form-input' id='phoneNum' type='text' placeholder='Phone Number'/>
          </label>
        </div>
        <div>
        <label htmlFor='message'>
          <textarea className='text-area' id='message' placeholder='Your Message'/>
        </label>
        </div>
        <input className='submit-button' type='submit' value='Submit' />
      </form>
    </section>
  )
}

export default ContactMe;