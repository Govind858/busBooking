import React, { useState } from 'react';
import TripCard from './TripCard';
import './TripPlanner.css';

const TripPlanner = () => {
  const [showForm, setShowForm] = useState(false);
  const [tripData, setTripData] = useState({
    startLocation: '',
    endLocation: '',
    startTime: '',
    endTime: '',
    numberOfStops: 0,
    stops: []
  });
  const [showRoute, setShowRoute] = useState(false);
  const [savedTrips, setSavedTrips] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'numberOfStops') {
      const numStops = parseInt(value) || 0;
      setTripData({
        ...tripData,
        [name]: numStops,
        stops: Array(numStops).fill().map((_, i) => 
          tripData.stops[i] || { location: '', time: '' }
        )
      });
    } else {
      setTripData({
        ...tripData,
        [name]: value
      });
    }
  };

  const handleStopChange = (index, field, value) => {
    const updatedStops = [...tripData.stops];
    updatedStops[index] = {
      ...updatedStops[index],
      [field]: value
    };
    setTripData({
      ...tripData,
      stops: updatedStops
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRoute(true);
    setSavedTrips([...savedTrips, {...tripData}]);
    
    // Reset form for next trip
    setTripData({
      startLocation: '',
      endLocation: '',
      startTime: '',
      endTime: '',
      numberOfStops: 0,
      stops: []
    });
    setShowForm(false);
  };

  const renderStopInputs = () => {
    return tripData.stops.map((stop, index) => (
      <div key={index} className="stop-container">
        <h3 className="stop-title">Stop {index + 1}</h3>
        <div className="stop-fields">
          <div>
            <label className="input-label">Location</label>
            <input
              type="text"
              value={stop.location}
              onChange={(e) => handleStopChange(index, 'location', e.target.value)}
              className="text-input"
              placeholder="e.g. Barcelona"
            />
          </div>
          <div>
            <label className="input-label">Time</label>
            <input
              type="time"
              value={stop.time}
              onChange={(e) => handleStopChange(index, 'time', e.target.value)}
              className="text-input"
            />
          </div>
        </div>
      </div>
    ));
  };

  const renderRouteMap = () => {
    const allLocations = [
      { name: tripData.startLocation, time: tripData.startTime },
      ...tripData.stops,
      { name: tripData.endLocation, time: tripData.endTime, location: tripData.endLocation }
    ];

    return (
      <div className="route-map">
        <h2 className="route-title">Trip Route</h2>
        <div className="location-list">
          {allLocations.map((location, index) => (
            <div key={index} className="location-item">
              <div className="location-marker-container">
                <div className="location-marker">
                  {index + 1}
                </div>
                <div className="location-details">
                  <div className="location-name">
                    {index === 0 ? location.name : 
                     index === allLocations.length - 1 ? location.name : 
                     location.location}
                  </div>
                  <div className="location-time">
                    {index === 0 ? `Departure: ${location.time}` : 
                     index === allLocations.length - 1 ? `Arrival: ${location.time}` : 
                     `Stop time: ${location.time}`}
                  </div>
                </div>
              </div>
              {index < allLocations.length - 1 && (
                <div className="connecting-line"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="trip-planner">
      <h1 className="main-title">Trip Planner</h1>
      
      <div className="action-container">
        {!showForm && (
          <button 
            onClick={() => setShowForm(true)}
            className="create-button"
          >
            Create Trip
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="trip-form">
          <h2 className="form-title">Trip Details</h2>
          
          <div className="form-grid">
            <div>
              <label className="input-label">Start Location</label>
              <input
                type="text"
                name="startLocation"
                value={tripData.startLocation}
                onChange={handleInputChange}
                className="text-input"
                required
              />
            </div>
            <div>
              <label className="input-label">End Location</label>
              <input
                type="text"
                name="endLocation"
                value={tripData.endLocation}
                onChange={handleInputChange}
                className="text-input"
                required
              />
            </div>
            <div>
              <label className="input-label">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={tripData.startTime}
                onChange={handleInputChange}
                className="text-input"
                required
              />
            </div>
            <div>
              <label className="input-label">End Time</label>
              <input
                type="time"
                name="endTime"
                value={tripData.endTime}
                onChange={handleInputChange}
                className="text-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">Number of Stops</label>
            <input
              type="number"
              min="0"
              name="numberOfStops"
              value={tripData.numberOfStops}
              onChange={handleInputChange}
              className="text-input"
            />
          </div>

          {tripData.numberOfStops > 0 && (
            <div className="stops-section">
              <h3 className="stops-title">Stops Information</h3>
              {renderStopInputs()}
            </div>
          )}

          <div className="button-container">
            <button
              type="button"
              className="cancel-button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="submit-button"
            >
              Save Trip
            </button>
          </div>
        </form>
      )}

      {showRoute && renderRouteMap()}
      
      {savedTrips.length > 0 && (
        <div className="saved-trips-container">
          <h2 className="saved-trips-title">Your Trips</h2>
          <div className="trips-grid">
            {savedTrips.map((trip, index) => (
              <TripCard key={index} trip={trip} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPlanner;