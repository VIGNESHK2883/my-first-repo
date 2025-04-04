import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddDevicePage from './pages/AddDevicePage';
import DeviceListPage from './pages/DeviceListPage';
import DeviceTreePage from './pages/DeviceTreePage';
import ModifyPage from './pages/ModifyPage';
import DeletePage from './pages/DeletePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/add-device" element={<AddDevicePage />} />
        <Route path="/devices" element={<DeviceListPage />} />
        <Route path="/devices/:id/tree" element={<DeviceTreePage />} />
        <Route path="/devices/:id/modify" element={<ModifyPage />} />
        <Route path="/devices/:id/delete" element={<DeletePage />} />
      </Routes>
    </Router>
  );
}

export default App;