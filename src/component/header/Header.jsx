import React from 'react'
import './header.css'
import CV from '../../assets/CV.pdf'
import photo from '../../assets/photofinale.jpg'
import Headersocials from './Headersocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Subhradeep Gogoi</h1>
        <div>
          <a href={CV} download className='btn'>Download Resume</a>
          <a href="#Contact" className='btn'>Get in Touch</a>
        </div>
        <Headersocials />
        <div className='photo'>
          <img src={photo} alt='me'></img>
        </div>
      </div>
      
      
    </header>
  )
}

export default header