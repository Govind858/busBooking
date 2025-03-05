import React, { useState } from 'react';
import { ArrowRight, User, Lock, Mail, KeyRound } from 'lucide-react';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log(isLogin ? 'Login submitted' : 'Registration submitted');
  };

  return (
    <div className="auth-container">
      <div className="background-pattern"></div>
      
      <div className="auth-card animate-fade-in">
        <div className="auth-header">
          <h1 className="app-title">
            Swift<span className="highlight">Bus</span>
          </h1>
          <p className="auth-subtitle">
            {isLogin ? 'Welcome Back!' : 'Create Your Account'}
          </p>
        </div>

        <div className="auth-toggle">
          <button 
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  required 
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                required 
              />
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="input-wrapper">
                <KeyRound className="input-icon" />
                <input 
                  type="password" 
                  id="confirm-password" 
                  placeholder="Confirm your password" 
                  required 
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="#forgotpassword">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Register'}
            <ArrowRight className="btn-icon" />
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>
              Don't have an account? 
              <span 
                className="toggle-text" 
                onClick={toggleAuthMode}
              >
                {' '}Register
              </span>
            </p>
          ) : (
            <p>
              Already have an account? 
              <span 
                className="toggle-text" 
                onClick={toggleAuthMode}
              >
                {' '}Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;