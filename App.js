import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddDevice from './pages/AddDevice'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddDevice />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App