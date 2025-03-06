import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Ticket, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { 
      id: 'home', 
      icon: <Home />, 
      label: 'Home',
      link: '/userHome'
    },
    { 
      id: 'history', 
      icon: <Ticket />, 
      label: 'My Tickets',
      link: '/history'
    },
    { 
      id: 'profile', 
      icon: <User />, 
      label: 'Profile',
      link: '/profile'
    }
  ];

  const userMenuItems = [
    { 
      icon: <Settings />, 
      label: 'Settings',
      link: '/settings'
    },
    { 
      icon: <LogOut />, 
      label: 'Logout',
      link: '/'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id) => {
    setActiveNav(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <h1 className="app-title">
            Swift<span className="highlight">Bus</span>
          </h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'menu-open' : ''}`}>
          {/* Main Navigation Links */}
          <div className="navbar-links">
            {navItems.map((item) => (
              <Link 
                key={item.id}
                to={item.link}
                className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="navbar-user-section">
            <div className="user-actions">
              {userMenuItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.link} 
                  className="user-action-item"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;