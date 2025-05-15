import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // Leave this if index.css exists — or delete it if you removed it
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);