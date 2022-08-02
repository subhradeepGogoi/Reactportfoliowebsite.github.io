import React from 'react'
import './exp.css'

const exp = () => {
  return (
    <section id='Experience'>
      <h1>
        Experience
      </h1>
      <div className='Expbox'>
        <div className='exp'>
          <h3>Experience in NLP</h3>
          <p>I worked on a Multilingual News Article Retrieval Project under Prof. Partha Pakrey sir. 
            During this internship I was familiarised with the concepts of Python,its libraries and the architectural development and deployment of models in Python.
            I learnt tensorflow, cosine similarity of documents, wordembedding, pandas and various dependencies while working on this project.
          </p>
        </div>
        <div className='exp'>
          <h3>Experience in python</h3>
          <p>Recently I had the opportunity to work as a Python developer intern in InterestShip. During this internship, I focused mainly on webscraping and database management.
            I had to scrape data from both static and dynamic sites and eventually entry that data into a database. I learnt Requests, Mysql.connector and other such libraries and their syntax for this internship.
          </p>
        </div>
        <div className='exp'>
          <h3>Experience in WebD</h3>
          <p>Participated in a hackathon for frontend WebDev in 2021 during which I first learn HTML,CSS and JS.
            Practicing and developing my skills in the field ever since then and have finally built this website as a project on ReactJS. I am still trying to learn responsive page design.
          </p>
        </div>
        <div className='exp'>
          <h3>Experience in Blender</h3>
          <p>Recently started working on blender as a necessary tool for my final year project on Game Development. Blends have been uploaded on Github repo and you are welcome to check them out.
          </p>
        </div>
      </div>
    </section>
  )
}

export default exp