import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-column">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Téléphone</h3>
                  <p>367-380-6521</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>francescomejiasolari@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contact-column">
              
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com/Francesco-Mejia" target="_blank" rel="noopener noreferrer">
                    github.com/Francesco-Mejia
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/francesco-mejia-solari-95420333a" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/francesco-mejia-solari
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 