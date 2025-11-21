// LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-landing">
        <div className="hero-content-landing">
          <img src="/pageLogo.jpg" alt="Life-course Learning" className="hero-logo-landing" />
          <h1 className="hero-title-landing">Life-course Learning</h1>
          <p className="hero-subtitle-landing">Your Gateway to Knowledge</p>
          <p className="hero-description-landing">
            Access thousands of educational resources, connect with learners worldwide, 
            and transform your learning journey today.
          </p>
          <div className="hero-buttons-landing">
            <button className="btn-primary-landing" onClick={() => navigate('/login', { state: { openRegister: true } })}>
              Get Started
            </button>
            <button className="btn-secondary-landing" onClick={() => navigate('/login')}>
              Sign In
            </button>
          </div>
          <div className="hero-stats-landing">
            <div className="stat-landing">
              <span className="stat-number-landing">10,000+</span>
              <span className="stat-label-landing">Books</span>
            </div>
            <div className="stat-landing">
              <span className="stat-number-landing">5,000+</span>
              <span className="stat-label-landing">Students</span>
            </div>
            <div className="stat-landing">
              <span className="stat-number-landing">50+</span>
              <span className="stat-label-landing">Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-landing">
        <h2 className="section-title-landing">Why Choose Us?</h2>
        <div className="features-grid-landing">
          <div className="feature-card-landing">
            <div className="feature-icon-landing">📚</div>
            <h3 className="feature-title-landing">Vast Library</h3>
            <p className="feature-text-landing">
              Access over 10,000 books across 50+ categories covering every subject imaginable.
            </p>
          </div>
          <div className="feature-card-landing">
            <div className="feature-icon-landing">🎓</div>
            <h3 className="feature-title-landing">Expert Support</h3>
            <p className="feature-text-landing">
              Get guidance from our library support team to find the perfect resources for your goals.
            </p>
          </div>
          <div className="feature-card-landing">
            <div className="feature-icon-landing">⚡</div>
            <h3 className="feature-title-landing">Instant Access</h3>
            <p className="feature-text-landing">
              Read books online instantly, anytime, anywhere on any device with 24/7 availability.
            </p>
          </div>
          <div className="feature-card-landing">
            <div className="feature-icon-landing">🌍</div>
            <h3 className="feature-title-landing">Global Community</h3>
            <p className="feature-text-landing">
              Join thousands of learners from around the world on their educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-landing">
        <h2 className="cta-title-landing">Ready to Start Learning?</h2>
        <p className="cta-text-landing">
          Join Life-course Learning today and unlock unlimited access to our entire library.
        </p>
        <button className="cta-button-landing" onClick={() => navigate('/login', { state: { openRegister: true } })}>
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="footer-landing">
        <div className="footer-content-landing">
          <div className="footer-brand-landing">
            <img src="/pageLogo.jpg" alt="Logo" className="footer-logo-landing" />
            <p className="footer-tagline-landing">Life-course Learning</p>
          </div>
          <p className="footer-copyright-landing">
            © 2025 Life-course Learning. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;