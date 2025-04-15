import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          Francesco Mejia Solari
        </a>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" onClick={handleNavClick}>Accueil</a>
          <a href="#about" onClick={handleNavClick}>À propos</a>
          <a href="#education" onClick={handleNavClick}>Éducation</a>
          <a href="#skills" onClick={handleNavClick}>Compétences</a>
          <a href="#experience" onClick={handleNavClick}>Expérience</a>
          <a href="#projects" onClick={handleNavClick}>Projets</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 