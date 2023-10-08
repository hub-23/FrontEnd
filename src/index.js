import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <GoogleOAuthProvider
      clientId="394104181858-suh9ubpg3aq6adm9jd5i44d3gf1u65s5.apps.googleusercontent.com"
    >
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </GoogleOAuthProvider>,

);
