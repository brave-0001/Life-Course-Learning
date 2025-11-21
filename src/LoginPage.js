// LoginPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('login');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirm, setShowRegConfirm] = useState(false);
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirm, setRegConfirm] = useState('');
  const [regNameError, setRegNameError] = useState('');
  const [regEmailError, setRegEmailError] = useState('');
  const [regPasswordError, setRegPasswordError] = useState('');
  const [regConfirmError, setRegConfirmError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  const [regLoading, setRegLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Show register tab if navigate from sign up
  useEffect(() => {
    if (location.state && location.state.openRegister) {
      setActiveTab('register');
    }
  }, [location.state]);

  const clearAllErrors = () => {
    setLoginEmailError('');
    setLoginPasswordError('');
    setLoginSuccess('');
    setRegNameError('');
    setRegEmailError('');
    setRegPasswordError('');
    setRegConfirmError('');
    setRegSuccess('');
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    clearAllErrors();
    let valid = true;
    
    if (!loginEmail.includes('@') || !loginEmail.includes('.')) {
      setLoginEmailError('Enter a valid email.');
      valid = false;
    }
    if (loginPassword.length < 5) {
      setLoginPasswordError('Password too short.');
      valid = false;
    }
    
    if (!valid) return;
    
    setLoginLoading(true);
    setTimeout(() => {
      setLoginLoading(false);
      setLoginSuccess('✓ Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/payment');
      }, 1500);
    }, 1200);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    clearAllErrors();
    let valid = true;
    
    const passwordValid = regPassword.length >= 6 &&
      /[A-Z]/.test(regPassword) &&
      /[0-9]/.test(regPassword) &&
      /[^A-Za-z0-9]/.test(regPassword);
    
    if (regName.length < 2) {
      setRegNameError('Enter your full name.');
      valid = false;
    }
    if (!regEmail.includes('@') || !regEmail.includes('.')) {
      setRegEmailError('Enter a valid email.');
      valid = false;
    }
    if (!passwordValid) {
      setRegPasswordError('Min 6 chars, uppercase, number, symbol.');
      valid = false;
    }
    if (regPassword !== regConfirm) {
      setRegConfirmError('Passwords do not match.');
      valid = false;
    }
    
    if (!valid) return;
    
    setRegLoading(true);
    setTimeout(() => {
      setRegLoading(false);
      setRegSuccess('✓ Account created. Please Login.');
      setTimeout(() => {
        setRegName('');
        setRegEmail('');
        setRegPassword('');
        setRegConfirm('');
        setPasswordStrength(0);
        setActiveTab('login');
      }, 1600);
    }, 1200);
  };

  const handleRegPasswordChange = (e) => {
    const password = e.target.value;
    setRegPassword(password);
    setPasswordStrength(password ? checkPasswordStrength(password) : 0);
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <div className="logo-container">
          <img src="/pageLogo.jpg" alt="Life-course Learning Logo" />
        </div>
        <div className="auth-header">
          <h2>{activeTab === 'login' ? 'Login' : 'Create Account'}</h2>
          <p>Welcome to Life-course Learning</p>
        </div>
        <div className="auth-tabs">
          <button
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); clearAllErrors(); }}
            type="button"
          >
            Login
          </button>
          <button
            className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); clearAllErrors(); }}
            type="button"
          >
            Create Account
          </button>
        </div>

        {activeTab === 'login' ? (
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="loginEmail">Email</label>
              <input
                type="email"
                id="loginEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Brevian@email.com"
                required
              />
              {loginEmailError && <div className="form-error">{loginEmailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type={showLoginPassword ? 'text' : 'password'}
                id="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button
                className="password-toggle"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                type="button"
                tabIndex={-1}
              >
                👁
              </button>
              {loginPasswordError && <div className="form-error">{loginPasswordError}</div>}
            </div>
            <div className="auth-actions">
              <button type="submit" className={`auth-submit${loginLoading ? ' loading' : ''}`}>
                <span>{loginLoading ? 'Logging in...' : 'Login'}</span>
              </button>
            </div>
            {loginSuccess && <div className="form-success">{loginSuccess}</div>}
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="regName">Full Name</label>
              <input
                type="text"
                id="regName"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                placeholder="Brevian Emmanuel"
                required
              />
              {regNameError && <div className="form-error">{regNameError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="regEmail">Email</label>
              <input
                type="email"
                id="regEmail"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="Brevian@email.com"
                required
              />
              {regEmailError && <div className="form-error">{regEmailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="regPassword">Password</label>
              <input
                type={showRegPassword ? 'text' : 'password'}
                id="regPassword"
                value={regPassword}
                onChange={handleRegPasswordChange}
                placeholder="Password"
                required
              />
              <button
                className="password-toggle"
                onClick={() => setShowRegPassword(!showRegPassword)}
                type="button"
                tabIndex={-1}
              >
                👁
              </button>
              {passwordStrength > 0 && (
                <div className="password-strength show">
                  <div
                    className="password-strength-bar"
                    style={{
                      width: `${passwordStrength * 25}%`,
                      background: passwordStrength === 1 ? '#e74c3c' : passwordStrength === 2 ? '#f39c12' : passwordStrength === 3 ? '#f1c40f' : '#27ae60',
                    }}
                  ></div>
                </div>
              )}
              {regPasswordError && <div className="form-error">{regPasswordError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="regConfirm">Confirm Password</label>
              <input
                type={showRegConfirm ? 'text' : 'password'}
                id="regConfirm"
                value={regConfirm}
                onChange={(e) => setRegConfirm(e.target.value)}
                placeholder="Repeat password"
                required
              />
              <button
                className="password-toggle"
                onClick={() => setShowRegConfirm(!showRegConfirm)}
                type="button"
                tabIndex={-1}
              >
                👁
              </button>
              {regConfirmError && <div className="form-error">{regConfirmError}</div>}
            </div>
            <div className="auth-actions">
              <button type="submit" className={`auth-submit${regLoading ? ' loading' : ''}`}>
                <span>{regLoading ? 'Creating...' : 'Create Account'}</span>
              </button>
            </div>
            {regSuccess && <div className="form-success">{regSuccess}</div>}
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;