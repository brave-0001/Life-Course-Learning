// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookLibrary from './BookLibrary/BookLibrary';
import './App.css';

function HomePage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('home');
  const [showContactModal, setShowContactModal] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBookNow = () => navigate('/login');

  const handleNavClick = (section) => {
    setActiveNav(section);
    if (section === 'contact') {
      setShowContactModal(true);
      setShowLibrary(false);
    } else if (section === 'books') {
      setShowLibrary(true);
      setShowContactModal(false);
    } else {
      setShowLibrary(false);
      setShowContactModal(false);
    }
  };

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setShowContactModal(false);
        setFormStatus('');
      }, 2000);
    }, 1500);
  };

  const cards = [
    { 
      id: 1, 
      title: 'Fiction', 
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=500&fit=crop', 
      description: 'Explore worlds of imagination', 
      count: '2,500+ Books' 
    },
    { 
      id: 2, 
      title: 'Science', 
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop', 
      description: 'Discover knowledge and research', 
      count: '1,800+ Books' 
    },
    { 
      id: 3, 
      title: 'History', 
      image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&h=500&fit=crop', 
      description: 'Learn from the past', 
      count: '1,200+ Books' 
    },
    { 
      id: 4, 
      title: 'Arts', 
      image: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?w=400&h=500&fit=crop', 
      description: 'Experience creativity', 
      count: '900+ Books' 
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 4);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 4) % 4);

  return (
    <div className="modern-page">
      <nav className="top-nav">
        <div className="nav-logo">
          <img src="/pageLogo.jpg" alt="Logo" />
          <span>Life-course Learning</span>
        </div>
        <div className="nav-menu">
          <a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>HOME</a>
          <a href="#library" className={activeNav === 'books' ? 'active' : ''} onClick={() => handleNavClick('books')}>LIBRARY</a>
          <a href="#explore" className={activeNav === 'explore' ? 'active' : ''} onClick={() => handleNavClick('explore')}>EXPLORE</a>
          <a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>ABOUT US</a>
          <a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>CONTACT</a>
        </div>
        <div className="nav-auth-buttons">
          <button className="nav-login-btn" onClick={() => navigate('/login')}>LOGIN</button>
          <button className="nav-signup-btn" onClick={() => navigate('/login', { state: { openRegister: true } })}>SIGN UP</button>
        </div>
      </nav>

      {showLibrary ? (
        <BookLibrary />
      ) : (
        <>
          <div className="hero-section" id="home">
            <div className="hero-content">
              <p className="hero-subtitle">Book Community</p>
              <h1 className="hero-title">
                NEVER STOP<br />EXPLORING THE<br />WORLD OF BOOKS.
              </h1>
              <p className="hero-description">
                Discover thousands of books, connect with passionate readers,<br />
                and expand your knowledge with our comprehensive library.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Books Available</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5,000+</div>
                  <div className="stat-label">Active Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Categories</div>
                </div>
              </div>
              <button className="hero-btn" onClick={handleBookNow}>DISCOVER NOW</button>
            </div>
            <div className="card-grid">
              {cards.map((card, index) => (
                <div 
                  key={card.id} 
                  className="book-card" 
                  style={{ animationDelay: `${index * 0.1}s` }} 
                  onClick={() => alert(`Explore ${card.title} category`)}
                >
                  <div className="card-image" style={{ backgroundImage: `url(${card.image})` }}>
                    <div className="card-overlay">
                      <h3 className="card-title">{card.title}</h3>
                      <p className="card-desc">{card.description}</p>
                      <p className="card-count">{card.count}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-controls">
              <button className="slider-btn" onClick={prevSlide}>‹</button>
              <button className="slider-btn" onClick={nextSlide}>›</button>
              <div className="slider-progress">
                <div className="progress-bar" style={{ width: `${((currentSlide + 1) / 4) * 100}%` }}></div>
              </div>
              <span className="slider-number">0{currentSlide + 1}</span>
            </div>
          </div>

          {showContactModal && (
            <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
              <div className="contact-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setShowContactModal(false)}>×</button>
                <h2>Contact Us</h2>
                <p className="modal-subtitle">We'd love to hear from you!</p>
                {formStatus === 'success' ? (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <p>Message sent successfully!</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="contact-form">
                    <div className="form-row">
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={contactForm.name} 
                        onChange={handleContactChange} 
                        required 
                      />
                    </div>
                    <div className="form-row">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={contactForm.email} 
                        onChange={handleContactChange} 
                        required 
                      />
                    </div>
                    <div className="form-row">
                      <input 
                        type="text" 
                        name="subject" 
                        placeholder="Subject" 
                        value={contactForm.subject} 
                        onChange={handleContactChange} 
                        required 
                      />
                    </div>
                    <div className="form-row">
                      <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        rows="5" 
                        value={contactForm.message} 
                        onChange={handleContactChange} 
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="submit-btn" disabled={formStatus === 'sending'}>
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          <footer className="professional-footer">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-logo">
                  <img src="/pageLogo.jpg" alt="Logo" />
                  <h3>Life-course Learning</h3>
                </div>
                <p>Empowering lifelong growth through knowledge and community.</p>
                <div className="social-links">
                  <a href="#facebook" className="social-icon" title="Facebook">📘</a>
                  <a href="#twitter" className="social-icon" title="Twitter">🐦</a>
                  <a href="#instagram" className="social-icon" title="Instagram">📷</a>
                  <a href="#linkedin" className="social-icon" title="LinkedIn">💼</a>
                </div>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#library">Library</a></li>
                  <li><a href="#explore">Explore</a></li>
                  <li><a href="#about">About Us</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#support">Support</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact Info</h4>
                <ul className="contact-info">
                  <li>📧 info@lifecourselearning.com</li>
                  <li>📞 +254 712 345 678</li>
                  <li>📍 Bungoma, Kenya</li>
                </ul>
                <button className="footer-contact-btn" onClick={() => setShowContactModal(true)}>Send Message</button>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Life-course Learning. All rights reserved.</p>
              <p>Designed with ❤️ for book lovers everywhere</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default HomePage;