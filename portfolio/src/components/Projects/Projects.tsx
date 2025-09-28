import React, { useState } from 'react';
import './Projects.css';

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  image: string;
  github: string | null;
  liveDemo: string | null;
}

const Projects: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (projectTitle: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  const projects: Project[] = [
    {
      title: "Gestion d'une ligue de soccer",
      description: "Application web complète pour la gestion des équipes de soccer (Projet Synthèse), permettant le suivi des présences, la communication entre parents, entraîneurs et l'organisation de la ligue. Développé avec une architecture moderne et des pratiques DevOps.",
      technologies: [
        { name: "C#", icon: "/images/skills/csharp.png" },
        { name: "React", icon: "/images/skills/react.png" },
        { name: "TypeScript", icon: "/images/skills/typescript.png" },
        { name: "SQL Server", icon: "/images/skills/icon-microsoft-sql-server.png" },
        { name: "Auth0", icon: "/images/skills/auth0.svg" },
        { name: "Azure", icon: "/images/skills/azure.png" },
        { name: "CI/CD", icon: "/images/skills/ASP.NET.png" }
      ],
      image: "/images/projects/EquipesSportives.png",
      github: "https://dev.azure.com/csf-dfc/EquipesSportives",
      liveDemo: "https://liguesoccerweb.azurewebsites.net/"
    },
    {
      title: "Système de Surveillance IoT pour des livraisons sensibles",
      description: "Solution IoT innovante utilisant des capteurs BME/BMP 280 pour surveiller les conditions environnementales des livraisons sensibles. Intégration avec Home Assistant pour le monitoring en temps réel et l'envoi d'alertes. Le système permet de suivre la température, l'humidité et la pression pendant le transport.",
      technologies: [
        { name: "C++", icon: "/images/skills/cpp.png" },
        { name: "HTML", icon: "/images/skills/html5.png" },
        { name: "JavaScript", icon: "/images/skills/javascript.png" },
        { name: "CSS", icon: "/images/skills/css3.png" },
        { name: "Home Assistant", icon: "/images/skills/home-assistant.png" },
        { name: "IoT", icon: "/images/skills/iot.png" }
      ],
      image: "/images/projects/LivraisonSensibles.png",
      github: "https://github.com/Francesco-Mejia/LIVRAISON_CAPTEURS_HOMEASSITANT",
      liveDemo: null
    },
    {
      title: "Jeu Mastermind",
      description: "Implémentation du jeu classique Mastermind en C++ et C. Le jeu consiste à deviner une combinaison de couleurs secrète en utilisant des indices des respectives positions pour guider le joueur. Le projet démontre l'utilisation avancée des structures de données et des algorithmes.",
      technologies: [
        { name: "C++", icon: "/images/skills/cpp.png" }
      ],
      image: "/images/projects/Mastermind.jpg",
      github: "https://github.com/Francesco-Mejia/Mastermind_TP3_AlgoAvance",
      liveDemo: null
    },
    {
      title: "Site Web Église le Reste de Sa Grâce",
      description: "Site web moderne et responsive pour l'église le reste de sa grâce, développé avec React et TypeScript. Le site présente les informations de l'église, les événements, et permet aux visiteurs de découvrir la communauté.",
      technologies: [
        { name: "React", icon: "/images/skills/react.png" },
        { name: "TypeScript", icon: "/images/skills/typescript.png" },
        { name: "HTML", icon: "/images/skills/html5.png" },
        { name: "CSS", icon: "/images/skills/css3.png" }
      ],
      image: "/images/projects/Eglise.png",
      github: "https://github.com/Francesco-Mejia/iglesia-website",
      liveDemo: "https://egliselerestedesagrace.ca/"
    },
    {
      title: "Site Web Party QC",
      description: "Site web moderne et responsive pour l'organisation d'évenements nocturnes à la Ville de Québec, développé avec React et TypeScript. Le site présente un système pour la reservation de billets, création de comptes personalisées, paiements en ligne et plusieurs autres fonctionnalitées pour les gens qui veulent s'amuser",
      technologies: [
        { name: "React", icon: "/images/skills/react.png" },
        { name: "TypeScript", icon: "/images/skills/typescript.png" },
        { name: "HTML", icon: "/images/skills/html5.png" },
        { name: "CSS", icon: "/images/skills/css3.png" }
      ],
      image: "/images/projects/PartyQC.png",
      github: "https://github.com/Francesco-Mejia/party_qc",
      liveDemo: "https://netstatevents.netlify.app/"
    },
    {
      title: "Système d'Alarme avec ESP-32",
      description: "Projet de système d'alarme utilisant un ESP-32, développé en C++. Le système permet la détection de mouvements et l'envoi de notifications en temps réel.",
      technologies: [
        { name: "C++", icon: "/images/skills/cpp.png" },
        { name: "IoT", icon: "/images/skills/iot.png" }
      ],
      image: "/images/projects/reveilmatin.jpg",
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
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <div 
                  className="project-header"
                  onClick={() => toggleDescription(project.title)}
                >
                  <h3 className="project-title">{project.title}</h3>
                  <button 
                    className={`toggle-description ${expandedProjects[project.title] ? 'active' : ''}`}
                    aria-label="Toggle description"
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <p className={`project-description ${expandedProjects[project.title] ? 'active' : ''}`}>
                  {project.description}
                </p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <img
                      key={techIndex}
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="tech-icon"
                    />
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
                      {project.title === "Gestion d'une ligue de soccer (en cours)" ? (
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