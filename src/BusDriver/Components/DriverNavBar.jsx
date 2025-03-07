import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import './DriverNavbar.css'; // Import CSS file

const DriverNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeSidebar();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileRef]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <button className="menu-button" aria-label="Menu" onClick={toggleSidebar}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div className="logo">SwiftBus</div>
        </div>
        
        <div className="navbar-right">
          <button className="notification-button" aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="notification-badge">5</span>
          </button>
          
          <div className="profile-container" ref={profileRef}>
            <button className="profile-button" aria-label="Profile" onClick={toggleProfile}>
              <div className="avatar">TD</div>
            </button>
            {isProfileOpen && <ProfileDropdown />}
          </div>
        </div>
      </nav>
      
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-menu">
            <div className="sidebar-menu-item" onClick={() => handleNavigation('/tripsPage')}>Trips</div>
            <div className="sidebar-menu-item" onClick={() => handleNavigation('/driversBooking')}>Booking History</div>
            <div className="sidebar-menu-item" onClick={() => handleNavigation('/revenue')}>Revenue</div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>
    </>
  );
};

export default DriverNavbar;