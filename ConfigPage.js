import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const ConfigurationManagement = () => {
  const navigate = useNavigate();

  const handleGetEquipments = () => {
    navigate('/config-page'); // Route to your table view (ConfigPage.jsx)
  };

  const handleGetPorts = () => {
    navigate('/port-page'); // Create this if you need a new page for ports
  };

  return (
    <div className="container">
      <h2>Configuration Management</h2>
      <div className="button-group">
        <button className="primary-button" onClick={handleGetEquipments}>
          Get Equipment Details
        </button>
        <button className="primary-button" onClick={handleGetPorts}>
          Get Port Details
        </button>
      </div>
    </div>
  );
};

export default ConfigurationManagement;