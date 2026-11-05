import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Clean up any legacy hash (#) and ensure base path  /ramineni is active
const pathname = window.location.pathname;
const hash = window.location.hash;

if (hash) {
  const cleanHash = hash.replace(/^#\/?/, '').toLowerCase();
  const validPages = ['about', 'services', 'future-projects', 'contact'];
  const targetSubPath = validPages.includes(cleanHash) ? `/${cleanHash}` : '';
  window.history.replaceState(null, '', ` /ramineni${targetSubPath}`);
} else if (!pathname.startsWith(' /ramineni')) {
  const targetSubPath = pathname === '/' ? '' : pathname;
  window.history.replaceState(null, '', ` /ramineni${targetSubPath}`);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename=" /ramineni">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
