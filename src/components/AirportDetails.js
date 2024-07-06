import React from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Container } from '@mui/material';
import './AirportDetails.css';

const AirportDetails = () => {
  

  return (
    <Container>
      <h1>Indira Gandhi International Airport</h1>
      <div className="tabs">
        <Button>Terminals</Button>
        <Button>Transport</Button>
        <Button>Contact details</Button>
      </div>
      <div className="terminal-info">
        <h2>Terminals</h2>
        <div className="terminal-card">
          <h3>Terminal 1</h3>
          <p>Optional metadata should be two lines.</p>
        </div>
        <div className="terminal-card">
          <h3>Terminal 2</h3>
          <p>Optional metadata should be two lines.</p>
        </div>
        <Button>+ Add Terminal</Button>
      </div>
      <h2>Services</h2>
      <FormControl fullWidth>
        <InputLabel>Service Name</InputLabel>
        <TextField name="serviceName" placeholder="Lost & found" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select>
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Sub Category</InputLabel>
        <Select>
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" component="label">
        Upload Image
        <input type="file" hidden />
      </Button>
      <Button variant="contained">Save</Button>
      </Container>
  );
};

export default AirportDetails;
