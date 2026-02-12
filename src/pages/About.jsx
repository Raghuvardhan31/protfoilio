import React from 'react'
import "./About.css";
function About() {
  return (
    <div className="main">
      <div>
        <h1>About Me</h1>
        <p>
          I am currently working as a Full Stack Developer Intern at Tanvox 
          Technology while pursuing my B.Tech in Computer Science Engineering (AI & ML) at MRCET.
          I specialize in building scalable web applications and backend systems using technologies like React,
            Django, Spring Boot, and Node.js.
          I have hands-on experience designing RESTful APIs, integrating databases,
          and deploying cloud-based applications. Alongside full-stack development, I am deeply interested in AI-driven systems, including Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) pipelines.
          I aim to grow as a Backend and AI Engineer, focusing on building efficient, scalable, 
            and intelligent systems.
        </p> 
    </div>
    <div className="education-section">
      <h2>Education</h2>
      <div className="edu-item">
        <img src="btech.png" alt="MRCET" />
        <p>
          B.Tech in Computer Science Engineering (AI & ML) - Malla Reddy College of Engineering and Technology (MRCET)
          <span>Cgpa : 8.2</span>
        </p>
      </div>
      <div className="edu-item">
        <img src="collage.png" alt="SRI cHAITANYA" />
        <p>
           Intermediate (MPC) – Sri Chaitanya Junior College
           <span>Cgpa : 9.6</span>
        </p>

      </div>
      <div className="edu-item">
        <img src="school.jpg" alt="stMarys" />
        <p>
          School Education – St. Mary’s PSM High School
          <span>Cgpa : 9.5</span>
        </p>
      </div>
      
    </div>
            
      </div>
  )
}

export default About
