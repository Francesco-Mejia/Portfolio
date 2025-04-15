import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      skills: [
        { name: "C# (.NET)", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 }
      ]
    },
    {
      title: "Bases de Données",
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Outils & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "Azure", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Méthode agile", level: 80 },
        { name: "IOT", level: 75 }
      ]
    },
    {
      title: "Systèmes d'Exploitation",
      skills: [
        { name: "Windows", level: 90 },
        { name: "Linux (Ubuntu, Kali)", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Compétences</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 