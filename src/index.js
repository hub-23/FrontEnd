import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './redux/Context';
import App from './components/App';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

root.render(
  <GoogleOAuthProvider
    clientId={
      process.env.REACT_APP_CLIENT_ID
      || '186468974308-8ktjbql7mdbr8gm2s9f7uqvc8qpog7ho.apps.googleusercontent.com'
    }
  >
    <React.StrictMode>
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <BrowserRouter basename="/FrontEnd">
            <Context>
              <App />
            </Context>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
