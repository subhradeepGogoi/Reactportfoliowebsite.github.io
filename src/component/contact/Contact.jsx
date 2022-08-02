import React from 'react'
import './contact.css'
import {FiLinkedin,FiGithub} from 'react-icons/fi'

const Contact = () => {
  return (
    <section id='Contact'>
      <h1>Contact</h1>
      <div className="contactcard">
        <div className="card"> Contact number : 7002368017 </div>
        <div className="card"> Email : shubhra.cnm@gmail.com </div>
        <div className="card"> Github : <a href='https://github.com/subhradeepGogoi' target="_blank">Github Link  <FiGithub/></a></div>
        <div className="card"> Linkedin : <a href='https://www.linkedin.com/in/subhradeep-gogoi-2678211ba/' target='_blank'>LinkedIn  <FiLinkedin/> </a></div>
      </div>
    </section>
  )
}

export default Contact