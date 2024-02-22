import React from 'react';
import nature2 from './images/nature2.webp'

const Carousel1 = () => {
  const carouselStyle = {
    width: '120%', // Adjust the width as needed
    height: '440px', // Adjust the height as needed
    overflow: 'hidden',
    margin: '0 auto', // Center the carousel horizontally
  };

  const imageStyle = {
    width: '90%', // Image takes 100% of the container width
    height: '100%', // Image takes 100% of the container height
    objectFit: 'cover',
  };

  return (
    <div style={carouselStyle}>
      <img src={nature2} alt="Nature" style={imageStyle} />
    </div>
  );
};

export default Carousel1;
