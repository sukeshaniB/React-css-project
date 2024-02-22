// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="info-section">
          <h4>Product Info</h4>
          <p>Your product information goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="info-section">
          <h4>About Us</h4>
          <p>About your company goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="info-section">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
