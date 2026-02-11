import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Languages</h3>
          <p>Python, Java, SQL, JavaScript</p>
        </div>

        <div className="skill-card">
          <h3>Frontend</h3>
          <p>React.js, HTML5, CSS3</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Django, Spring Boot, Node.js (Express), REST APIs</p>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>
          <p>MySQL, ChromaDB</p>
        </div>

        <div className="skill-card">
          <h3>Cloud & Deployment</h3>
          <p>AWS, Vercel, Custom Domain & DNS</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, Docker (Basic), Postman, VS Code</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
