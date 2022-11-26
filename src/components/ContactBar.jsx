import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
import CV from '../assets/CV.pdf'

const ContactBar = () => {
  return (
    <nav className='contact-bar'>
      <div className='cbar-c'>
        <div className='cbar-1'>
          <a href='https://www.linkedin.com/in/joshua-dupin/' target="_blank" rel="noreferrer">
            <Icon.Linkedin size='20' />
          </a>
          <a href='https://github.com/Joshua35260' target="_blank" rel="noreferrer">
            <Icon.GitHub size='20' />
          </a>
          <a href='https://www.instagram.com/sunji_josh/?hl=fr' target="_blank" rel="noreferrer">
            <Icon.Instagram size='20' />
          </a>
          <a href='https://www.facebook.com/SunjiDJosh' target="_blank" rel="noreferrer">
            <Icon.Facebook size='20' />
          </a>
        </div>

        <a href={CV} download onClick={CV}>
          Télécharger mon CV
        </a>
        <div className='cbar-3'>
          <a href='mailto:joshua35260@gmail.com'>
            <Icon.Mail size='14' className='mailIcon' />
            joshua35260@gmail.com
          </a>
        </div>
      </div>
    </nav>
  )
}

export default ContactBar
