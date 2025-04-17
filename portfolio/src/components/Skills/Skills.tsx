import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      skills: [
        { name: "C#", icon: "/images/skills/csharp.png" },
        { name: "C++", icon: "/images/skills/cpp.png" },
        { name: "Python", icon: "/images/skills/python.png" },
        { name: "JavaScript", icon: "/images/skills/javascript.png" },
        { name: "TypeScript", icon: "/images/skills/typescript.png" },
        { name: "HTML", icon: "/images/skills/html5.png" },
        { name: "CSS", icon: "/images/skills/css3.png" }
      ]
    },
    {
      title: "Bases de Données",
      skills: [
        { name: "SQL Server", icon: "/images/skills/icon-microsoft-sql-server.png" },
        { name: "MySQL", icon: "/images/skills/pngimg.com - mysql_PNG17.png" }
      ]
    },
    {
      title: "Outils & Technologies",
      skills: [
        { name: "Git", icon: "/images/skills/git.png" },
        { name: "GitHub", icon: "/images/skills/github.png" },
        { name: "Azure", icon: "/images/skills/azure.png" },
        { name: "CI/CD", icon: "/images/skills/react.png" },
        { name: "Agile", icon: "/images/skills/node.png" },
        { name: "IOT", icon: "/images/skills/iot.png" },
        { name: "React", icon: "/images/skills/auth0.svg" },
      ]
    },
    {
      title: "Systèmes d'Exploitation",
      skills: [
        { name: "Windows", icon: "/images/skills/windows.png" },
        { name: "Linux", icon: "/images/skills/linux.png" }
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
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="skill-icon"
                    />
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