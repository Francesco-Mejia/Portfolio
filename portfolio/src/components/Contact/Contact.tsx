import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer l'email
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Adresse</h3>
                <p>3775 Avenue des Compagnons, QC, Canada</p>
              </div>
            </div>
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
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/Francesco-Mejia" target="_blank" rel="noopener noreferrer">
                  github.com/Francesco-Mejia
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 