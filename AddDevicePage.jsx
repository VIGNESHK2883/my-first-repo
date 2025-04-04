import React, { useState } from 'react';
import './AddDevicePage.css';

const AddDevicePage = () => {
  const [form, setForm] = useState({
    name: '',
    ip: '',
    port: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/devices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert('Device added successfully');
        setForm({ name: '', ip: '', port: '', username: '', password: '' });
      } else {
        alert('Failed to add device');
      }
    } catch (error) {
      alert('Error connecting to backend');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Network Device</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'ip', 'port', 'username', 'password'].map((field) => (
          <input
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Add Device</button>
      </form>
    </div>
  );
};

export default AddDevicePage;