import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
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
          <div className="footer-links">
            <a href="#about">À propos</a>
            <a href="#skills">Compétences</a>
            <a href="#experience">Expérience</a>
            <a href="#education">Formation</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-info">
            <p>Francesco Mejia Solari</p>
            <p>Développeur Full Stack</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Francesco Mejia Solari. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 