import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">À Propos</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Étudiant passionné en 5ᵉ session d'un AEC en programmation, bases de données et serveurs au Cégep de Sainte-Foy. 
              Avec une expérience diversifiée allant de la gestion d'entrepôt au service à la clientèle, 
              j'ai acquis une excellente capacité d'adaptation, un sens de l'organisation et un esprit analytique 
              qui me permettent d'aborder efficacement les défis techniques comme logiques.
            </p>
            <p className="about-description">
              Je suis à la recherche d'un stage en développement logiciel afin de mettre en pratique mes connaissances 
              dans le domaine. Mon objectif est de renforcer mon expertise en conception et en architecture logicielle 
              tout en contribuant activement à des projets concrets.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Session AEC</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Langues</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 