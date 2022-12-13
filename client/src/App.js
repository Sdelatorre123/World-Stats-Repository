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
  );
}

export default App;