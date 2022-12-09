import logo from './logo.svg';
import React from 'react';
/* import './App.css'; */
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import { Button } from 'react-bootstrap';

/* import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Stats from './pages/Stats'; */

/* function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/matchup" 
            element={<SignIn />} 
          />
          <Route 
            path="/matchup/:id" 
            element={<Stats />} 
          />
        </Routes>
      </div>
    </Router>
  );
} */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button> this is button </Button>
        </p>
          <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
            Learn React
          </a>
      </header>
    </div>
  )
}

export default App;
