import React from 'react'
import './Home.css'
import Skills from './subpages/Skills'

function Home() {
  return (
    <div className="home">

      {/* Image + Description Section */}
      <div className="home-container">
        <div className="overlay">
          
          <div className='desc'>
            <h2>Welcome to My Portfolio</h2>
            <h3>Hi, I’m Raghuvardhan Bonjuri</h3>
            <p>
              Full Stack Developer specializing in building scalable web 
              applications using React, Django, Spring Boot, Node.js, and AWS. 
              I design clean, secure RESTful APIs and develop production-ready 
              backend systems with a strong focus on performance and architecture. 
              Passionate about cloud technologies, backend engineering, and AI-driven 
              applications including LLMs and RAG pipelines.Hii this is raghuvardahn
            </p>  
          </div>

          <div className='img'>
            <img src="raghu.png" alt="Raghuvardhan Bonjuri" />
          </div>

        </div>
      </div>

      {/* Skills Section - This will appear below */}
      <div className="skills-section">
        <Skills />
      </div>

    </div>
  )
}

export default Home
