import React from 'react'
import './About.css'
import Storycards from './Storycards'
const About = () => {
  return (
    <section id='About'>
      <h1>About Me</h1>
      <p className='aboutp'>I am a final year Engineering student with great interest in the world of Web Development and aspire to dive into web3 someday. I believe in learning languages via application and thus came this portfolio site, my first project on ReactJS.
        It was a fun experience and I only grow stronger as a developer everyday.
      </p>
      <Storycards/>
    </section>
  )
}

export default About