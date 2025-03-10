import React from 'react';
import './RevenueComponent.css';
import WeeklyReport from '../Components/WeeklyReport'
import MonthlyReport from './MonthlyReport';

const RevenueComponent = () => {
  return (
    <div className="revenue-container">
      {/* Main visualization area */}
      <div className="revenue-visualization">
        {/* <WeeklyReport/> */}
        <MonthlyReport/>
      </div>

      {/* Controls section */}
      <div className="revenue-controls">
        <button className="revenue-button">Monthly Earnings</button>
        <button className="revenue-button">Weekly Earnings</button>
        <button className="revenue-button settings-button">
          <span className="settings-icon">⚙️</span> Settings
        </button>
      </div>
    </div>
  );
};

export default RevenueComponent;
