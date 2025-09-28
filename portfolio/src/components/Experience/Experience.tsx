import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Développeur Full-Stack",
      company: "Infodev EDI inc.",
      location: "Québec, Canada",
      period: "Actuellement",
      description: "Développeur faisant partie de l'équipe software de l'entreprise en faisant des logiciels dédiés pour les besoins de chaque client",
      technologies: ["React", "TypeScript", "C++", "SQL", "R", "Entre plusieurs autres"]
    },
    {
      title: "Développeur Front-End",
      company: "Église le reste de sa grâce",
      location: "Québec, Canada",
      period: "Actuellement",
      description: "Leader du projet de digitalisation avec lancement d'un site internet et prise en charge de l'ensemble du frontend. URL du site : egliselerestedesagrace.ca/",
      technologies: ["React", "TypeScript", "CSS", "HTML"]
    },
    {
      title: "Préposé à la salle à manger",
      company: "Gibraltar (RPA) et Jardins du haut Saint-Laurent (CHSLD)",
      location: "Québec, Canada",
      period: "Avril 2023 - Janvier 2025",
      description: "Service aux résidents pour le petit-déjeuner, déjeuner et dîner, gestion de la cuisine et maintien du service actif tout au long de la journée.",
      technologies: []
    },
    {
      title: "Gestion et commis d'entrepôt",
      company: "HART",
      location: "Québec, Canada",
      period: "2023 - Mars 2023",
      description: "Responsable de l'entrepôt, réception, organisation et enregistrement de la marchandise entrante par palettes et codes d'énumération.",
      technologies: []
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Expérience Professionnelle</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-location">{exp.location}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                {exp.technologies.length > 0 && (
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 