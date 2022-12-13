import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          {/* <Route 
            path="/SignIn" 
            element={<SignIn />} 
          />
          <Route 
            path="/Stats/:id" 
            element={<Stats />} 
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
