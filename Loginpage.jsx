import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { Box, Typography, Container, Paper } from '@mui/material'

const Login = () => {
  const [error, setError] = useState('')

  const handleLogin = async (credentials) => {
    try {
      // In a real app, this would be an API call to your backend
      console.log('Login credentials:', credentials)
      
      // Simulate successful login
      alert('Login successful! (This is a frontend demo)')
    } catch (err) {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <LoginForm onSubmit={handleLogin} />
        </Paper>
      </Box>
    </Container>
  )
}

export default Login