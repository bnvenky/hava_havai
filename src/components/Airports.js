import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Airports.css';

const airports = [
  { id: 1, name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
  { id: 2, name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
  { id: 3, name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
  { id: 4, name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
  { id: 5, name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
];

const Airports = () => {
  return (
    <div>
      <div>
      <h1>Airports</h1>
      <Button variant="contained" color="primary" component={Link} to="/airports/new">
        + Add new
      </Button>
      </div>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>All Airports</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Terminals</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {airports.map((airport) => (
              <TableRow key={airport.id} component={Link} to={`/airports/${airport.id}`}>
                <TableCell>{airport.name}</TableCell>
                <TableCell>{airport.country}</TableCell>
                <TableCell>{airport.code}</TableCell>
                <TableCell>{airport.terminals}</TableCell>
                <TableCell><Button>✏️</Button></TableCell>
                <TableCell><Button>🗑️</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Airports;
