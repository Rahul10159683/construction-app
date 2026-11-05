import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Determine basename dynamically so it works seamlessly on GitHub Pages, local dev, or subpaths
const getBasename = () => {
  const path = window.location.pathname;
  if (path.includes('/construction-app')) return '/construction-app';
  if (path.includes('/ramineni')) return '/ramineni';
  return process.env.PUBLIC_URL || '/';
};

const basename = getBasename();

// Clean up any legacy hash (#)
const hash = window.location.hash;
if (hash) {
  const cleanHash = hash.replace(/^#\/?/, '').toLowerCase();
  const validPages = ['about', 'services', 'future-projects', 'contact'];
  if (validPages.includes(cleanHash)) {
    const base = window.location.pathname.replace(/\/$/, '');
    window.history.replaceState(null, '', `${base}/${cleanHash}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
