// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Harvest from './pages/Harvest';
import Cleaning from './pages/Cleaning';
import Storage from './pages/Storage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Harvest />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </Router>
  );
};

export default App;

