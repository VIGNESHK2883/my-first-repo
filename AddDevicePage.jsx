import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddDevicePage() {
  const [deviceName, setDeviceName] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!deviceName || !ipAddress || !userName || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/devices/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({ deviceName, ipAddress, userName, password}),
      });

      if (response.ok) {
        localStorage.setItem("userName",userName);
        localStorage.setItem("password",password);
        alert("Device added successfully");
        navigate("/login");
      } else {
        alert("Failed to add device");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while adding device");
    }
  };

  return (
    <div className="container">
      <h2>Add Network Device</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Device Name:</label>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IP Address:</label>
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>UserName:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Add Device</button>
      </form>
    </div>
  );
}

export default AddDevicePage;
