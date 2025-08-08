import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDo from './components/ToDo';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
      {/* Always visible on every page */}
      <NavBar />

      {/* Main content area */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </main>

      {/* Always at the bottom */}
      <Footer />
    </div>
  </BrowserRouter>
);

reportWebVitals();
