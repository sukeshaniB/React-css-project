// src/pages/ProductPage.js
import React from 'react';

import ProductGrid from '../components/ProductCard';
import Carousel from '../components/Carousel';

const ProductPage = () => {
  return (
    <div>
      <h2>First Set of Products</h2>
      <ProductGrid />

      <h2>Carousel</h2>
      <Carousel />

      <h2>Second Set of Products</h2>
      <ProductGrid />
    </div>
  );
};

export default ProductPage;
