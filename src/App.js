import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Airports from './components/Airports';
import AirportDetails from './components/AirportDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/airports" element={<Airports />} />
            <Route path="/airports/:id" element={<AirportDetails />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
