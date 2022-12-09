<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button> This is Button </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
/* import logo from './logo.svg'; */
import React from 'react';
/* import './App.css'; */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import SignUpForm from './components/SingupForm'

function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<LoginForm />} 
          />
          <Route 
            path="/matchup" 
            element={<Navbar />} 
          />
          <Route 
            path="/matchup/:id" 
            element={<SignUpForm />} 
          />
        </Routes>
      </div>
    </Router>
>>>>>>> 544d4f44fe073f10c75faa37d45b8e50b1f3e58d
  );
}

export default App;
