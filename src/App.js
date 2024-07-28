// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ManageRestaurant from './pages/ManageRestaurant';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage" element={<ManageRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
