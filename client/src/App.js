import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
/* import SignIn from './pages/SignIn';
import Stats from './pages/Stats'; */
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SingupForm'
import Discussion from './pages/Discussion';
import Subscription from './components/Subscription';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
      <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route
          path="/signup"
          element={<SignupForm />}
          />
           <Route
          path="/login"
          element={<LoginForm />}
          />
           <Route
          path="/discussion"
          element={<Discussion />}
          />
          <Route
          path="/subscription"
          element={<Subscription />} 
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
    </ApolloProvider>
  );
}

export default App;
