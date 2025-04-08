import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeviceForm from '../components/DeviceForm'
import { Box, Typography, Container, Paper } from '@mui/material'

const AddDevice = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (deviceData) => {
    try {
      // In a real app, this would be an API call to your backend
      console.log('Device data submitted:', deviceData)
      
      // Simulate successful submission
      navigate('/login')
    } catch (err) {
      setError('Failed to add device. Please try again.')
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Add Network Device
          </Typography>
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <DeviceForm onSubmit={handleSubmit} />
        </Paper>
      </Box>
    </Container>
  )
}

export default AddDevice