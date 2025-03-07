import React from 'react';
import './ProfileDropdown.css'; // Import the external CSS file

const ProfileDropdown = () => {
  const userData = {
    name: "Thomas Driver",
    busName: "City Express 42",
    avatarText: "TD"
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-header">
        <div className="avatar">{userData.avatarText}</div>
        <div className="profile-info">
          <div className="profile-name">{userData.name}</div>
          <div className="profile-bus">{userData.busName}</div>
        </div>
      </div>

     

      <div className="profile-footer">
        <button onClick={handleLogout} className="logout-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
