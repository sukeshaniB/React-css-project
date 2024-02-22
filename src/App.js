// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductGrid from './components/ProductCard';
import Footer from './components/Footer';
import Carousel1 from './components/Carousel1';
import ProductGrid1 from './components/ProductCard1';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* First Carousel */}
        <Carousel />

        {/* First Product Grid with gap */}
        <div style={{ marginTop: '60px' }}>
          <ProductGrid rows={3} cols={3} />
        </div>

        {/* Second Carousel */}
        <Carousel1 />

        {/* Second Product Grid */}
        <ProductGrid1 rows={3} cols={3} />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
