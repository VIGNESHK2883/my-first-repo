import React, { useState } from 'react';

function LoginPage() {
  const [ip, setIp] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (ip && password) {
      alert('Login successful (mock)');
    } else {
      alert('Enter IP and password');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login Page</h2>
      <div>
        <label>IP Address:</label>
        <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;