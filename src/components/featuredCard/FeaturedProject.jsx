// FeaturedProject.jsx
import React from 'react';
import './FeaturedProject.css';

export default function FeaturedProject({ project, isReversed }) {
  return (
    <div 
      className={`featured-project ${isReversed ? 'reversed' : ''}`}
      data-aos="fade-up"
    >
      {/* صورة المشروع */}
      <div className="project-image-wrapper">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          <img src={project.image} alt={project.title} className="project-img" />
          <div className="img-overlay"></div>
        </a>
      </div>

      {/* تفاصيل المشروع */}
      <div className="project-content">
        <span className="project-overline">Featured Project</span>
        <h3 className="project-title">{project.title}</h3>
        
        <div className="project-description">
          <p>{project.description}</p>
        </div>

        <ul className="project-tech-list">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}