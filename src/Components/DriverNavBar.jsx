import React, { useState } from 'react';

const DriverNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleMenuItemClick = (e) => {
    // Set active menu item logic would go here
    
    // Close sidebar on mobile
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        height: '64px',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30
      }}>
        <div className="navbar-left" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <button 
            className="menu-button" 
            aria-label="Menu"
            onClick={toggleSidebar}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              transition: 'background-color 0.2s'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div className="logo" style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#2563eb',
            marginLeft: '0.5rem'
          }}>SwiftBus</div>
        </div>
        
        <div className="navbar-right" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem'
        }}>
          <button className="notification-button" aria-label="Notifications" style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
            borderRadius: '0.375rem',
            transition: 'background-color 0.2s'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="notification-badge" style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: '#ef4444',
              color: 'white',
              fontSize: '0.625rem',
              fontWeight: 500,
              height: '18px',
              width: '18px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>5</span>
          </button>
          
          <button className="profile-button" aria-label="Profile" style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem',
            borderRadius: '0.375rem',
            transition: 'background-color 0.2s'
          }}>
            <div className="avatar" style={{
              width: '36px',
              height: '36px',
              borderRadius: '9999px',
              backgroundColor: '#2563eb',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600
            }}>TD</div>
          </button>
        </div>
      </nav>
      
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        top: '64px',
        left: 0,
        bottom: 0,
        width: '250px',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 40,
        boxShadow: '4px 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="sidebar-content" style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          <div className="sidebar-menu" style={{
            padding: '1rem 0'
          }}>
            <div className="sidebar-menu-label" style={{
              padding: '0.5rem 1.5rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(248, 250, 252, 0.6)',
              marginTop: '0.5rem'
            }}>Main</div>
            <div className="sidebar-menu-item active" onClick={handleMenuItemClick} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              color: 'white',
              backgroundColor: '#1e293b',
              borderLeft: '3px solid #2563eb'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Dashboard
            </div>
            
            <div className="sidebar-menu-label" style={{
              padding: '0.5rem 1.5rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(248, 250, 252, 0.6)',
              marginTop: '0.5rem'
            }}>Operations</div>
            <div className="sidebar-menu-item" onClick={handleMenuItemClick} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              color: 'rgba(248, 250, 252, 0.8)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              Trips
            </div>
            <div className="sidebar-menu-item" onClick={handleMenuItemClick} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              color: 'rgba(248, 250, 252, 0.8)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Trip Routes
            </div>
            <div className="sidebar-menu-item" onClick={handleMenuItemClick} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              color: 'rgba(248, 250, 252, 0.8)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Schedule
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} 
        onClick={closeSidebar}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 35,
          display: isSidebarOpen ? 'block' : 'none'
        }}
      ></div>
    </>
  );
};

export default DriverNavbar;