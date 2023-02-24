import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './context/userContext'
import { SubmissionsContextProvider } from './context/submissionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <SubmissionsContextProvider>
        <App />
      </SubmissionsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);


