import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Container } from '@mui/material';
import './AirportDetails.css';

const airports = [
  { id: 1, name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
  { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
  { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
  { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
  { id: 5, name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
];

const AirportDetails = () => {
  const { id } = useParams();
  const airport = airports.find((airport) => airport.id === parseInt(id));

  return (
    <Container>
      {airport ? (
        <>
          <h1>{airport.name}</h1>
          <div className="tabs">
            <Button>Terminals</Button>
            <Button>Transport</Button>
            <Button>Contact details</Button>
          </div>
          <div className="terminal-info">
            <h2>Terminals</h2>
            {Array.from({ length: airport.terminals }, (_, index) => (
              <div className="terminal-card" key={index}>
                <h3>Terminal {index + 1}</h3>
                <p>Optional metadata should be two lines.</p>
              </div>
            ))}
            <Button>+ Add Terminal</Button>
          </div>
          <h2>Services</h2>
          <FormControl fullWidth>
            <InputLabel>Service Name</InputLabel>
            <TextField name="serviceName"  />
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
        </>
      ) : (
        <p>Airport not found</p>
      )}
    </Container>
  );
};

export default AirportDetails;
