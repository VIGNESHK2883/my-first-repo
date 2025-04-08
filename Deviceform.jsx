import { useState } from 'react'
import {
  TextField,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  FormControl
} from '@mui/material'

const DeviceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    ipAddress: '',
    username: '',
    password: '',
    deviceType: ''
  })

  const deviceTypes = ['Router', 'Switch', 'Firewall']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="IP Address"
            name="ipAddress"
            value={formData.ipAddress}
            onChange={handleChange}
            required
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Device Type</InputLabel>
            <Select
              name="deviceType"
              value={formData.deviceType}
              label="Device Type"
              onChange={handleChange}
              required
            >
              {deviceTypes.map(type => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Add Device
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default DeviceForm