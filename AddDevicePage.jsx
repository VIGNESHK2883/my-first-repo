import React, { useState } from 'react';

function AddDevicePage() {
  const [deviceName, setDeviceName] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [port, setPort] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Device Details:", { deviceName, ipAddress, port });
    alert("Device added (mock)!");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Network Device</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Device Name: </label>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>IP Address: </label>
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Port: </label>
          <input
            type="text"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />
        </div>
        <button type="submit">Add Device</button>
      </form>
    </div>
  );
}

export default AddDevicePage;