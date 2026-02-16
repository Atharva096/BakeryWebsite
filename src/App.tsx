// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Locations from './pages/Store';
import Products from './pages/products';
import Header from './components/Heeader';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

