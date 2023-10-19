import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <GoogleOAuthProvider
      clientId={ process.env.REACT_APP_CLIENT_ID
        || '186468974308-8ktjbql7mdbr8gm2s9f7uqvc8qpog7ho.apps.googleusercontent.com' }
    >
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </GoogleOAuthProvider>,
);
