import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Site Web Église le Reste de Sa Grâce",
      description: "Site web moderne et responsive pour l'église, développé avec React et TypeScript. Le site présente les informations de l'église, les événements, et permet aux visiteurs de découvrir la communauté.",
      technologies: ["React", "TypeScript", "CSS", "HTML"],
      image: "https://egliselerestedesagrace.ca/",
      github: null,
      liveDemo: "https://egliselerestedesagrace.ca/"
    },
    {
      title: "Système d'Alarme avec ESP-32",
      description: "Projet de système d'alarme utilisant un ESP-32, développé en C++. Le système permet la détection de mouvements et l'envoi de notifications en temps réel.",
      technologies: ["C++", "ESP-32", "Arduino", "Électronique"],
      image: null,
      github: "https://github.com/Francesco-Mejia/TP2_AMOC_BROUILLON",
      liveDemo: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <i className="fab fa-github"></i>
                      Code Source
                    </a>
                  )}
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 