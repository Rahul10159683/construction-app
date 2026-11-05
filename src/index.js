import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Clean up any legacy hash (#) and ensure base path /ramireddy is active
const pathname = window.location.pathname;
const hash = window.location.hash;

if (hash) {
  const cleanHash = hash.replace(/^#\/?/, '').toLowerCase();
  const validPages = ['about', 'services', 'future-projects', 'contact'];
  const targetSubPath = validPages.includes(cleanHash) ? `/${cleanHash}` : '';
  window.history.replaceState(null, '', `/ramireddy${targetSubPath}`);
} else if (!pathname.startsWith('/ramireddy')) {
  const targetSubPath = pathname === '/' ? '' : pathname;
  window.history.replaceState(null, '', `/ramireddy${targetSubPath}`);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/ramireddy">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
