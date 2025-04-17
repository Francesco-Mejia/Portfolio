import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Gestion des Équipes Sportives",
      description: "Application web complète pour la gestion des équipes de soccer (Projet Synthèse), permettant le suivi des présences, la communication entre parents, entraîneurs et l'organisation de la ligue. Développé avec une architecture moderne et des pratiques DevOps.",
      technologies: ["C# .NET", "Entity Framework", "API REST", "React.js", "TypeScript", "SQL Server", "Auth0", "Azure", "CI/CD", "Méthodes Agiles"],
      image: null,
      github: "https://dev.azure.com/csf-dfc/EquipesSportives",
      liveDemo: "https://liguesoccerweb.azurewebsites.net/"
    },
    {
      title: "Système de Surveillance IoT pour des livraisons sensibles",
      description: "Solution IoT innovante utilisant des capteurs BME/BMP 280 pour surveiller les conditions environnementales des livraisons sensibles. Intégration avec Home Assistant pour le monitoring en temps réel et l'envoi d'alertes. Le système permet de suivre la température, l'humidité et la pression pendant le transport.",
      technologies: ["C++", "C", "HTML", "JavaScript", "CSS", "CMake", "Home Assistant", "IoT", "ESP-32","MQTT"],
      image: null,
      github: "https://github.com/Francesco-Mejia/LIVRAISON_CAPTEURS_HOMEASSITANT",
      liveDemo: null
    },
    {
      title: "Jeu Mastermind",
      description: "Implémentation du jeu classique Mastermind en C++ et C. Le jeu consiste à deviner une combinaison de couleurs secrète en utilisant des indices des respectives positions pour guider le joueur. Le projet démontre l'utilisation avancée des structures de données et des algorithmes.",
      technologies: ["C++", "C", "Algorithmique avancée", "Structures de données"],
      image: null,
      github: "https://github.com/Francesco-Mejia/Mastermind_TP3_AlgoAvance",
      liveDemo: null
    },
    {
      title: "Site Web Église le Reste de Sa Grâce",
      description: "Site web moderne et responsive pour l'église le reste de sa grâce, développé avec React et TypeScript. Le site présente les informations de l'église, les événements, et permet aux visiteurs de découvrir la communauté.",
      technologies: ["React", "TypeScript", "CSS", "HTML"],
      image: "https://egliselerestedesagrace.ca/",
      github: null,
      liveDemo: "https://egliselerestedesagrace.ca/"
    },
    {
      title: "Système d'Alarme avec ESP-32",
      description: "Projet de système d'alarme utilisant un ESP-32, développé en C++. Le système permet la détection de mouvements et l'envoi de notifications en temps réel.",
      technologies: ["C++", "ESP-32", "Arduino", "IOT", "MQTT", "API REST"],
      image: null,
      github: "https://github.com/Francesco-Mejia/ReveilleMatinAlarmes-ESP-32",
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
                      {project.title === "Gestion des Équipes Sportives" ? (
                        <i className="fab fa-azure"></i>
                      ) : (
                        <i className="fab fa-github"></i>
                      )}
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