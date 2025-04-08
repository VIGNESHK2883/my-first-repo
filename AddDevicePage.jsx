import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddDevicePage() {
  const [ipAddress, setIpAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ipAddress && username && password && type) {
      alert('Device added successfully!');
      navigate('/login');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Device</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>IP Address:</label>
          <input type="text" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Type:</label>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDevicePage;