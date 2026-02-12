import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>

      <div className="projects-container">

        {/* ChessConnect */}
        <div className="project-card">
          <h2>ChessConnect</h2>
          <p>
            A social media platform for the chess community where users can
            view courses, solve puzzles, upload posts, and track performance.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Django</span>
            <span>REST API</span>
            <span>Authentication</span>
          </div>

          <div className="project-links">
            <a
              href="https://chesswave.online"
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Rama Raju Chess Academy */}
        <div className="project-card">
          <h2>Rama Raju Chess Academy Website</h2>
          <p>
            A responsive educational website developed for Rama Raju Chess Academy
            showcasing courses, tournaments, coaching programs, and student achievements.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Responsive UI</span>
            <span>Web Development</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Raghuvardhan31/rama-raju-chess"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>

            <a
              href="https://ramarajuchessacademy.chesswave.online"
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* IPO Web App */}
        <div className="project-card">
          <h2>IPO Web Application</h2>
          <p>
            A production-level IPO management platform built using React and Django.
            Includes admin dashboard, REST APIs, company & IPO management,
            document uploads, and AWS deployment.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Django</span>
            <span>MySQL</span>
            <span>AWS</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Raghuvardhan31/IPO-REST_API-team_bluestock-"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Memora */}
        <div className="project-card">
          <h2>Memora – Smart Memory Assistant</h2>
          <p>
            An AI-powered personal assistant that answers queries using
            LangChain, HuggingFace embeddings, FAISS, and FastAPI.
            Designed for intelligent, context-aware responses.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>LangChain</span>
            <span>FAISS</span>
            <span>FastAPI</span>
            <span>AI</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Raghuvardhan31/memora"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Cosmetic Recommendation */}
        <div className="project-card">
          <h2>Cosmetic Recommendation System</h2>
          <p>
            AI-based system that suggests cosmetic products based on
            skin condition analysis using Machine Learning classification models.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Flask</span>
            <span>Data Analysis</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/Raghuvardhan31/cosmetic-recommendation"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
