import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  const education = [
    {
      degree: "AEC en programmation",
      school: "Cégep de Sainte-Foy",
      location: "Québec, Canada",
      period: "Janvier 2023 – Juin 2025",
      description: "5ᵉ session en cours. AEC en programmation, bases de données et serveurs.",
      status: "En cours"
    },
    {
      degree: "Ingénierie informatique et systèmes",
      school: "Universidad San Juan Bautista",
      location: "Lima, Pérou",
      period: "Mars 2021 – Décembre 2022",
      description: "Formation en ingénierie informatique et systèmes.",
      status: "Terminé"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="section-title">Formations</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className={`education-status ${edu.status.toLowerCase()}`}>
                  {edu.status}
                </span>
              </div>
              <div className="education-details">
                <div className="education-school">
                  <i className="fas fa-university"></i>
                  <span>{edu.school}</span>
                </div>
                <div className="education-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{edu.location}</span>
                </div>
                <div className="education-period">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 