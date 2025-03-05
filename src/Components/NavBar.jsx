import React, { useState } from 'react';
import { 
  Home, 
  Ticket, 
  MapPin, 
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
      link: '/home'
    },
    { 
      id: 'tickets', 
      icon: <Ticket />, 
      label: 'My Tickets',
      link: '/tickets'
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
      link: '/logout'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id) => {
    setActiveNav(id);
    // Add navigation logic here
    console.log(`Navigating to ${id}`);
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
              <a 
                key={item.id}
                href={item.link}
                className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* User Profile Section */}
          <div className="navbar-user-section">
            {/* <div className="user-profile">
              <img 
                src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" 
                alt="User Profile" 
                className="user-avatar" 
              />
              <div className="user-details">
                <p className="user-name">John Doe</p>
                <p className="user-email">john.doe@example.com</p>
              </div>
            </div> */}

            {/* User Menu Items */}
            <div className="user-actions">
              {userMenuItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="user-action-item"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;