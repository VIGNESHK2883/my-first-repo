import React, { useEffect, useState } from 'react';
import './App.css'; // Make sure your CSS handles table and layout styling

const EquipDetails = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/config/devices")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch device details");
        }
        return response.json();
      })
      .then((data) => setDevices(data))
      .catch((error) => {
        console.error("Error fetching devices:", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Equipment Details</h2>
      <table className="device-table">
        <thead>
          <tr>
            <th>Equip ID</th>
            <th>Equip Attributes</th>
            <th>Equip Name</th>
            <th>Equip Type</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device, index) => (
            <tr key={index}>
              <td>{device.equipid}</td>
              <td>{device.equipattributes}</td>
              <td>{device.equipname}</td>
              <td>{device.equiptype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipDetails;