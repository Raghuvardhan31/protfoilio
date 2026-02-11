import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'ChessWave Online',
      description: 'A comprehensive online chess platform with real-time multiplayer gaming, tournament management, and advanced analytics for players of all skill levels.',
      features: ['Real-time Multiplayer', 'Tournament System', 'Player Analytics', 'AI Opponent'],
      link: 'https://chesswave.com',
      linkText: 'Visit Live Site',
      icon: '♟️'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with product management, payment integration, inventory tracking, and customer analytics dashboard.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Responsive'],
      link: '#',
      linkText: 'View Project',
      icon: '🛒'
    },
    {
      title: 'Business Dashboard',
      description: 'Custom business intelligence dashboard with real-time data visualization, reporting tools, and performance metrics for data-driven decision making.',
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Tools'],
      link: '#',
      linkText: 'Explore Dashboard',
      icon: '📊'
    }
  ];

  return (
    <div className="projects-container">
      {/* Header */}
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Showcasing successful projects built with cutting-edge technology and innovative solutions.</p>
      </div>

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.icon}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <div className="features-list">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className={`feature-tag ${idx === 0 ? 'primary' : ''}`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  {project.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-projects">
          <h3>Projects Coming Soon</h3>
          <p>We're working on some exciting projects. Stay tuned!</p>
        </div>
      )}

      {/* Coming Soon Section */}
      <div className="coming-soon">
        <h2>📈 More Institutional Projects Coming Soon</h2>
        <p>
          We're constantly growing and adding new projects to our portfolio. 
          This is completely normal for growing companies as we expand our capabilities 
          and take on larger institutional clients.
        </p>
        <div className="trust-message">
          ✨ <span className="growth-indicator">Growing & Expanding</span> - Stay tuned for exciting updates!
        </div>
      </div>
    </div>
  );
}
