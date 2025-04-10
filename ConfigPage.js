// src/ConfigPage.js
import React from 'react';
import './App.css'; // for shared styles

const ConfigPage = () => {
  const configData = [
    { equipId: 'EQ001', equipAttributes: 'Attr1', equipName: 'Device A', equipType: 'Amplifier' },
    { equipId: 'EQ002', equipAttributes: 'Attr2', equipName: 'Device B', equipType: 'Receiver' },
    // Add more dummy or fetched data here
  ];

  return (
    <div className="container">
      <h2 className="title">Configuration Details</h2>
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
          {configData.map((device, index) => (
            <tr key={index}>
              <td>{device.equipId}</td>
              <td>{device.equipAttributes}</td>
              <td>{device.equipName}</td>
              <td>{device.equipType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConfigPage;