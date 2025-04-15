import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Francesco Mejia
        </Link>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>À propos</Link>
          <Link to="/education" onClick={() => setIsMenuOpen(false)}>Éducation</Link>
          <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Compétences</Link>
          <Link to="/experience" onClick={() => setIsMenuOpen(false)}>Expérience</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projets</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 