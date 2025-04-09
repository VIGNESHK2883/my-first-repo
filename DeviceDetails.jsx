import React from 'react';
import './App.css'; // using the same CSS for consistency

const DeviceOptions = ({ location }) => {
  const deviceType = location?.state?.deviceType || 'Device';

  return (
    <div className="container">
      <h2>{deviceType} Options</h2>
      <div className="button-group">
        <button className="primary-button">Configuration Management</button>
        <button className="primary-button">Performance Management</button>
        <button className="primary-button">Fault Management</button>
      </div>
    </div>
  );
};

export default DeviceOptions;