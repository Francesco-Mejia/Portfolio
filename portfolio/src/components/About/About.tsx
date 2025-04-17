import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">À Propos</h2>
        <div className="about-content">
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