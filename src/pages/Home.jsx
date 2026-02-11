import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
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
            applications including LLMs and RAG pipelines.
          </p>  
        </div>

        <div className='img'>
          <img src="raghu.png" alt="Raghuvardhan Bonjuri" />
        </div>
      </div>
    </div>
  )
}

export default Home
