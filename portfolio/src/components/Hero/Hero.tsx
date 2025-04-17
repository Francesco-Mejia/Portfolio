import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Francesco Mejia Solari
            <span className="hero-subtitle">Développeur</span>
          </h1>
          <p className="hero-description">
            Étudiant passionné en programmation, bases de données et serveurs, à la recherche d'un stage.
            Je crée des solutions innovantes avec les technologies modernes.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button primary">Me Contacter</a>
            <a href="#projects" className="cta-button secondary">Voir mes projets</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Francesco-Mejia" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:francescomejiasolari@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:367-380-6521">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 